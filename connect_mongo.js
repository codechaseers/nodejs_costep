const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function DbConnect() {
    let resulet = await client.connect();
    let db = resulet.db('admin');
    return db.collection('users');
    // let respond = await collection.find({}).toArray();
    // console.log(respond);
}
DbConnect()
 // ftaching data using .then(()=>{})

//  DbConnect().then((resp)=>{
//   resp.find({}).toArray().then((data)=>{
//     console.log(data);
//   });
//  })

 // ftaching data using  async await


 async function FatchData() {
 let respond= await DbConnect()
 let data = await respond.find().toArray()
 console.log(data);
    
 }
 FatchData(); 