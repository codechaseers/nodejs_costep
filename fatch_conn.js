let DbConn = require('./db_connection.js')
// import Database connection  form dbconn .js

    

async function FatchData() {
    let respond = await DbConn();
    let data = await respond.find({}).toArray()
    console.log(data);
}
FatchData()