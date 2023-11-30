// event emitter is like event in java scrivt like target some button or etc .
// but in node js  there are no button target target only api.....


const express= require('express');
const EvenetEmitter=require('events');
const app=express();
const event = new EvenetEmitter()
event.on("countapi",()=>{
    console.log("event call");
})
app.get("/",(req,resp)=>{
    resp.send("ok,it's work ")
    event.emit("countapi")
})
app.listen(80)