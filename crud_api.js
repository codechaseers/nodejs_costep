
const express = require('express');
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const mo = require('mongodb')

Dbconn = async () => {
    let resulet = await client.connect();
    let db = resulet.db('admin');
    let collection = db.collection('users');
    return collection;
}
// async function fatching(){
//     let respond=await Dbconn();
//     let data= await respond.find().toArray()
//     return data;
// }


let app = express()
app.use(express.json())
// this function 
app.get('/', async (req, resp) => {
    let respond = await Dbconn();
    respond = await respond.find().toArray()

    resp.send(respond)
    console.log(respond);

})

// inshert data into db using postmanand post method

// app.post('/',async (req,resp)=>{
//     let data=await Dbconn();
//     let new_data= await data.insertOne(req.body)

//     resp.send(new_data)
//     console.log(new_data);
// })
app.put('/:name', async (req, resp) => {
    let data = await Dbconn();
    let new_data = await data.updateOne(
        // {name:req.body.name},       // its work when you have to upadte diffrend filled 
        { name: req.params.name },        // when you have to change the same filled  you can use the params in url such a that
        { $set: req.body }


    )

    resp.send({ status: "ook" })
    // console.log(new_data);

})
// delete api 

// app.delete('/',async (req,resp)=>{
//     let dldata=await Dbconn();
//     dldata=await dldata.deleteOne(req.body)
// resp.send("deleted")
// console.log(dldata);
// })

app.delete('/:dl', async (req, resp) => {
    let dldata = await Dbconn();
    dldata = await dldata.deleteOne({ _id: new mo.ObjectId(req.params.dl) })
    resp.send("deleted")
    console.log(dldata);
})


app.listen(80)