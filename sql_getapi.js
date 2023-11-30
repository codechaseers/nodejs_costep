const express=require("express")
const app = express()
const conn=require("./sqlconnection");
 

app.get("/",(req,resp)=>{
    // resp.send("hello")
    conn.query("SELECT * FROM `student`",(err,res)=>{
        if (res){
            resp.send(res)
             
        }
        else{
            console.log(err);
        }
    
    })


})


app.listen(8000)