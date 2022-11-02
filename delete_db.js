const dbconn=require('./db_connection.js');
 async function delete_db(){
    let respond =await dbconn()
    let de =await respond.deleteOne({name:"subhranshu shaoo"})
console.log(de);
 }
 delete_db()