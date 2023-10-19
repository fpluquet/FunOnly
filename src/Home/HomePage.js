import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export default function HomePage() {
  const [gamesData, setGamesData] = useState(undefined)
  useEffect(() => {
    fetch('http://localhost:3001/games')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGamesData(data);
      });
  }, []);

  if(gamesData === undefined) {
    return (<div className={"App"}>
      <div className={"flex justify-center items-center h-screen"}>
        <div className={"text-4xl font-bold"}>
          Loading...
        </div>
      </div>
    </div>);
  }

  return (
    <div className={"App"}>
      <div className={"flex justify-center items-center m-16"}>
        <div className={"text-4xl font-bold"}>
          FunOnly !
        </div>
      </div>
      <div className={"flex justify-center items-start flex-wrap"}>
        {gamesData.map((gameData) => {
          return (
            <NavLink className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100 m-10" to={"/game/" + gameData.id}>
              <img className="w-full" src={gameData.infos.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{gameData.infos.name}</div>
                  <p className="text-gray-700 text-base">
                    {gameData.infos.description}
                  </p>
                </div>
            </NavLink>
          )
        })}

      </div>
    </div>
  );
}
