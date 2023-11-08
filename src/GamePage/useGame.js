import {createContext, useContext, useState} from "react";

// enum en JS
const GameContext = createContext(null);


export const GameContextProvider = ({children}) => {

  // définition de l'état
  const [game, setGame] = useState(null)
  const [error, setError] = useState(null)

  // définition des actions
  const loadGame = async (id) => {
    console.log("loadGame", id)
    setError(null)
    try {
      const response = await fetch('http://localhost:3001/game/' + id);
      const game = await response.json();
      console.log(game)
      setGame(game);
    } catch (e) {
      setError(e)
    }
  }

  // compteur pour les ids des commentaires créés avant d'avoir l'id du serveur
  let createdCommentId = -1
  async function sendComment (text) {
    // vision optimiste
    const newComment = {
      id: --createdCommentId, // on ne peut pas utiliser l'id du serveur car il n'est pas encore connu
      author: {
        name: "Anonymous",
        avatar: "https://i.pravatar.cc/300",
        id: 3
      },
      text: text,
      isSending: true
    }
    setGame({...game, comments: [
      ...game.comments,
      newComment]})
    try {
      // demande au serveur
      const response = await fetch('http://localhost:3001/game/' + game.id + '/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({comment: text})
      });
      const commentFromServer = await response.json();
      // on a la réponse du serveur => on peut mettre à jour le commentaire qu'on avait créé
      setGame((lastGameValue) => ({...lastGameValue, comments: lastGameValue.comments.map(c => c.id === newComment.id ? commentFromServer : c)}))
    } catch (e) {
      // on a été trop optimiste => on retire le commentaire
      setGame((lastGameValue) => ({...lastGameValue, comments: game.comments.filter(c => c.id !== newComment.id)}))
    }
  }

  async function deleteComment(comment) {
    // vision optimiste
    const oldGameComments = [...game.comments]
    setGame({...game, comments: game.comments.filter(c => c.id !== comment.id)})
    try {
      // demande au serveur
      await fetch('http://localhost:3001/game/' + game.id + '/comment/' + comment.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      // pas nécessaire de regarder une réponse qui est bonne => il est déjà supprimé
    } catch (e) {
      // on a été trop optimiste => on remet le commentaire
      setGame({...game, comments: oldGameComments})
    }
  }

  const addGame = () => {
    console.log("addGame")
  }

  // définition du contexte
  const contextValue = {
    // l'état
    game,
    error,
    // les actions
    loadGame,
    sendComment,
    deleteComment,
    addGame
  }

  // le corps du composant React : le provider
  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  const {game, error} = context
  return {
    // ce qui est déjà dans le contexte
    ...context,
    // des raccourcis que l'on peut utiliser dans les composants (qu'on aurait aussi pu mettre dans le contexte directement, c'est un choix)
    isLoaded: game != null,
    isLoading: game == null && error == null,
    isError: error != null,
    comments: game?.comments ?? [],
  }
}
