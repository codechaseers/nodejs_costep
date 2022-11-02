let DbConn = require('./db_connection.js')
// import Database connection  form dbconn .js

async function InsertData() {
    let respond = await DbConn();
    let data = await respond.insertMany(
        [
            {
                name: 'subhranshu shaoo',
                age: 20,
                job: 'gamer'
            }, 
            {
                name: 'subhranshu shaoo',
                age: 20,
                job: 'gamer'
            },
            {
            name: 'Rohan shaoo',
            age: 20,
            job: 'Video editer'

            }
        ]
    )

 if(data.acknowledged){
    console.log('data inserted sucessfully.....');
 }
}
InsertData()