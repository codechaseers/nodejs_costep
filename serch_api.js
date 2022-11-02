const mongoose=require("mongoose");
const express=require("express");
const app = express()
mongoose.connect("mongodb://localhost:27017/admin");

const userschema = new mongoose.Schema({
    name: String,
    age: Number,
    job: String
})
const usermodel = mongoose.model("users", userschema);

app.use(express.json())  

app.get("/serch/:key",async (req,resp)=>{
    let serch_data=await usermodel.find({
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
    })

    resp.send(serch_data);
})
app.listen(80)