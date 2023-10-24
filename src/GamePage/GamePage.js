import HeaderComponent from "./HeaderComponent";
import {DescriptionComponent} from "./DescriptionComponent";
import {InfosComponent} from "./InfosComponent";
import {YoutubeVideoComponent} from "./YoutubeVideoComponent";
import {CommentsComponent} from "./Comments/CommentsComponent";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {GameContextProvider, useGame} from "./useGame";


function GamePage() {
  return (
    <div className={"App"}>
      <GameContextProvider>
        <GameInnerPage/>
      </GameContextProvider>
    </div>
  );
}

function GameInnerPage() {
  const params = useParams()
  const navigate = useNavigate()
  const {game, loadGame, isLoading} = useGame();
  useEffect(() => {
    loadGame(params.id)
  }, []);
  if(isLoading) {
    return <div>Loading...</div>
  }
  console.log(game)
  return (
    <>
      <HeaderComponent gameData={game}/>
      <button className={"fixed shadow top-2 left-2 w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full text-black"} onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <div className={"flex justify-space-between md:flex-row max-w-7xl mx-auto"}>
        <div class={"flex-auto"}>
          <DescriptionComponent gameData={game}/>
        </div>
        <div>
          <InfosComponent gameData={game}/>
        </div>
      </div>
      <YoutubeVideoComponent gameData={game}/>
      <CommentsComponent gameData={game}/>
      </>
)
}

export default GamePage;
