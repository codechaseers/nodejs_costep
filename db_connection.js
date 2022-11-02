 const {MongoClient}=require('mongodb');
 const url='mongodb://localhost:27017';
 const client= new MongoClient(url);

 async function dbconn(){
    let resulet=await client.connect();
    let db=resulet.db('admin');
    let collection=db.collection('users');
    return collection;
 }
 module.exports=dbconn;