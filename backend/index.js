import express from 'express'
import cors from 'cors'

const app = express ()
app.use(cors())

let count = 0
app.get("/", (req, res) => {
    res.send(count.toString())
})

app.post("/", (req, res) => {
    count++
    res.send(count.toString())
})

app.listen(3333)