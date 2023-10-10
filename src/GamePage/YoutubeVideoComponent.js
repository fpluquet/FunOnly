export function YoutubeVideoComponent({gameData}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <div className="h1 font-bold">Vidéo</div>
        <p>
          <iframe width="100%" height="600" src={"https://www.youtube.com/embed/" + gameData.infos.videoId}
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
        </p>
      </div>
    </div>
  )
}
