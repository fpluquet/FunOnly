export default function HeaderComponent({gameData}) {
  return (

    <div className="relative bg-cover bg-no-repeat" style={{
      "background-position": "50%",
      "background-image": "url(" + gameData.infos.image + ")",
      "height": "500px"
    }}>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Jeu : {gameData.infos.name}
            </h1>
          </div>
        </div>
      </div>
    </div>

  )
}
