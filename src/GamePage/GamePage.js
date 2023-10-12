import HeaderComponent from "./HeaderComponent";
import {DescriptionComponent} from "./DescriptionComponent";
import {InfosComponent} from "./InfosComponent";
import {YoutubeVideoComponent} from "./YoutubeVideoComponent";
import {CommentsComponent} from "./Comments/CommentsComponent";
import {useEffect, useState} from "react";

function GamePage() {
  const [gameData, setGameData] = useState(undefined)
  useEffect(() => {
    fetch('http://localhost:3001/game/3')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGameData(data);
      });
  }, []);
  if(gameData === undefined) {
    return <div>Loading...</div>
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
