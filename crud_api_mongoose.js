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
    // resp.send("ok it's work");
   
  
})

// find data  api using mongoose 
app.get('/find', async (req, resp) => {
 
    resp.cookie('name', 'geks');
    resp.send("Cookie Set");
    // resp.send(await usermodel.find())

})
// find data according to paramas
app.get('/find/:_id', async (req, resp) => {
try {
    let data=await usermodel.find(req.params)
    resp.status(200).json({
        status:true,
        data
    })
} catch (error) {
    resp.status(500).json({
        status:false,
        message:"data not found"
    })
}
    
    // console.log(data);

})

// delete  api using mongoose 
app.delete("/delete/:id", async (req, resp) => {
    let dl_data = await usermodel.deleteOne(req.params)
    resp.send(dl_data);
})

// update  api using mongoose 
app.put("/update/:_id", async (req, resp) => {
    // await usermodel.updateOne(
    //      req.params , {
    //     $set:  req.body 
    // }
    // )
    let product = await usermodel.findById(req.params.id)
    product = await findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    resp.status(200).json({
        status: true,
       product 
    })



    resp.send("uptudate")
})

app.listen(4000,()=>{
    console.log("server is run on port ");
});

