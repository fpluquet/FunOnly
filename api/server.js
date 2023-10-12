const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.get("/game/3", (req, res) => {
    return res.send({
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
    })
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})
