import express from "express"

const app = express()

app.use(cors())
app.use(express.json())


app.listen(4550, () => {
    console.log("Auth server on")
})