require('dotenv').config

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


app.use(express.json())

const post = [
    {
        username: "Mani",
        title: "Post 1"
    }
]

app.get('/posts', (req, res) => {
    res.json(post)
})

app.post('login', (req, res) => {
    // Authenticate User

    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

app.listen(3000)