const express = require("express")
const cors = require("cors")
const fs = require("fs");
const app = express()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const games = JSON.parse(fs.readFileSync("api/games.json"))
app.get("/games", (req, res) => {
    return res.send(games)
})

app.get("/game/:id", (req, res) => {
    return res.send(games.find(game => game.id == req.params.id))
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})
