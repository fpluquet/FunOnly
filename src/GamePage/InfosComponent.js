import {useGame} from "./useGame";

export function InfosComponent() {
  const {game} = useGame()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <div className="h1 font-bold">Infos</div>
        <p>
          <ul>
            <li>Plateformes : {game.infos.platforms.join(', ')}</li>
            <li>PEGI : {game.infos.pegi}</li>
            <li>Editeurs : {game.infos.editors.join(', ')}</li>

          </ul>
        </p>
      </div>
    </div>
  )
}
