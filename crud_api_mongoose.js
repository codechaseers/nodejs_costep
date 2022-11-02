const monogoose = require('mongoose');
const express = require("express");
const app = express();

monogoose.connect("mongodb://localhost:27017/admin");

const userschema = new monogoose.Schema({
    name: String,
    age: Number,
    job: String
})
const usermodel = monogoose.model("users", userschema);

app.use(express.json())     // this is use for read the body data form postman

// inshert  api using mongoose 
app.post('/', async (req, resp) => {
    let data = new usermodel(req.body)
    data = await data.save()
    console.log(data);
    resp.send("ok it's work");
})

// find data  api using mongoose 
app.get('/find', async (req, resp) => {

    resp.send(await usermodel.find())

})

// delete  api using mongoose 
app.delete("/delete/:id", async (req, resp) => {
    let dl_data = await usermodel.deleteOne(req.params)
    resp.send(dl_data);
})

// update  api using mongoose 
app.put("/update/:id", async (req, resp) => {
    await usermodel.updateOne(
         req.params , {
        $set:  req.body 
    }
    )
    resp.send("uptudate")
})

app.listen(80);

