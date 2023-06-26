const express=require("express")
require("dotenv").config()


const app=express()


app.get("/",(req,res)=>{
    res.send("base point")
})


app.listen(process.env.PORT, ()=>{
console.log(`SERVER ${PORT}`)
})
    