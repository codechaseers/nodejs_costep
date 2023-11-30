const mysql =require("mysql");
const conn = mysql.createConnection({
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
   
})
module.exports=conn;