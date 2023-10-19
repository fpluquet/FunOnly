import HeaderComponent from "./HeaderComponent";
import {DescriptionComponent} from "./DescriptionComponent";
import {InfosComponent} from "./InfosComponent";
import {YoutubeVideoComponent} from "./YoutubeVideoComponent";
import {CommentsComponent} from "./Comments/CommentsComponent";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

function GamePage() {
  const [gameData, setGameData] = useState(undefined)
  const params = useParams()
  useEffect(() => {

    fetch('http://localhost:3001/game/' + params.id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGameData(data);
      });
  }, []);
  const navigate = useNavigate()
  if(gameData === undefined) {
    return <div>Loading...</div>
  }
  return (
    <div className={"App"}>
      <HeaderComponent gameData={gameData}/>
      <button className={"fixed shadow top-2 left-2 w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full text-black"} onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <div className={"flex justify-space-between md:flex-row max-w-7xl mx-auto"}>
        <div class={"flex-auto"}>
          <DescriptionComponent gameData={gameData}/>
        </div>
        <div>
          <InfosComponent gameData={gameData}/>
        </div>
      </div>
      <YoutubeVideoComponent gameData={gameData}/>
      <CommentsComponent gameData={gameData}/>
    </div>
  );
}



export default GamePage;
