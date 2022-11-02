const dbconn=require('./db_connection.js')
async function Update_db(){
    let respond=await dbconn();
    let update=await respond.updateMany(
        {job:"gamer"},{

            $set:{job:"weab developer"}
        }
    )
console.log(update);
}
Update_db()