 
const express = require('express')
const dotenv = require("dotenv")
const app = express()
const {chats} = require("./data/data")
dotenv.config();

app.get("/",(req,res)=>{
    res.send("api is runnimg")
});

app.get('/api/chat',(req,res)=>{
res.send(chats)
 
});

app.get('/api/chat/:id',(req,res)=>{
    const singleChatt =chats.find((c)=>c._id===req.params.id)
     
    console.log(singleChatt)
    
})
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server started ${PORT}`))