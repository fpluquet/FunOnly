import HeaderComponent from "./HeaderComponent";
import {DescriptionComponent} from "./DescriptionComponent";
import {InfosComponent} from "./InfosComponent";
import {YoutubeVideoComponent} from "./YoutubeVideoComponent";
import {CommentsComponent} from "./Comments/CommentsComponent";

function GamePage() {
  const gameData = {
    id: 3,
    infos: {
      name: "Rocket League",
      description: 'Le jeu de foot avec des voitures. C\'est un jeu de sport et de course. Il est disponible sur PC, PS4, PS5, Xbox One, Xbox Series X/S et Nintendo Switch. Il est sorti le 7 juillet 2015. Il est développé par Psyonix et édité par Epic Games. Il est classé PEGI 3. Il est multijoueur. Il est disponible en français.',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg?t=1637775373',
      videoId: 'J5143g8ZfTY',
      website: 'https://www.rocketleague.com/fr-fr/',
      price: 19.99,
      category: 'Sport',
      platforms: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X/S', 'Nintendo Switch'],
      pegi: 3,
      editors: ['Psyonix', 'Epic Games'],
    },
    comments: [
      {
        id: 1,
        author: {
          id: 1,
          name: 'Jean',
          avatar: 'https://i.pravatar.cc/300?u=1',
        },
        text: 'J\'adore ce jeu !',
      },
      {
        id: 2,
        author: {
          id: 2,
          name: 'Pierre',
          avatar: 'https://i.pravatar.cc/300?u=2',
        },
        text: 'Ca va, c\'est pas mal.',
      }
    ]
  }
  return (
    <div className={"App"}>
      <HeaderComponent gameData={gameData}/>
      <div className={"flex justify-space-between md:flex-col max-w-7xl mx-auto"}>
        <div class={"flex-2"}>
          <DescriptionComponent gameData={gameData}/>
        </div>
        <InfosComponent gameData={gameData}/>
      </div>
      <YoutubeVideoComponent gameData={gameData}/>
      <CommentsComponent gameData={gameData}/>
    </div>
  );
}



export default GamePage;
