import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const login = []
const tweets = []

app.post("/sign-up", (req, res) =>{
    login.push(req.body)
    console.log("OK")
    res.send(req.body)
})

app.post("/tweets", (req, res) =>{
    for( ;tweets.length >= 10 ; ){
        tweets.pop()
    }
    tweets.unshift(req.body)
    console.log("OK")
    res.send(req.body)
})

app.get("/tweets", (req, res) => {
    for(let i = 0; i < tweets.length; i++){
        for(let j = 0; j < login.length; j++){
        if(login[j].username === tweets[i].username){
            tweets[i].avatar = login[j].avatar
        }
    }
    }
    console.log("OK")
    res.send(tweets)
})


app.listen(5000)