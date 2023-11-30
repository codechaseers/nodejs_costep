const { query } = require("express");
const  mysql =require("mysql");
// coonection code
const conn= mysql.createConnection({
    server:"localhost",
    user:"root",
    password:"",
    database:"test"
})

// check it's coonect or not
conn.connect((err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("ok its done");
    }
})

conn.query("SELECT * FROM `student`",(err,res)=>{
    if (res){
        console.log(res);
    }
    // else{
    //     console.log(err);
    // }

})