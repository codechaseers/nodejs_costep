const express = require('express');
const { rollback } = require('./sqlconnection');
const conn = require("./sqlconnection")
const app = express()
// creat a post api in sql
app.use(express.json())
app.post("/", (req, resp) => {
    let data = req.body
    conn.query('INSERT INTO `student` SET ?', data,(err, resu, field) => {
      if (err) throw err
      resp.send(resu)
    })
})

// update data using put mrthod  

app.put("/update:id",(req,resp)=>{
    let data=[req.body.name,req.body.roll,req.params.id];
    conn.query("UPDATE student SET name=?,roll=? where sl_no =?",data,(err,resu,fields)=>{
        if (err) throw err
        resp.send(resu)
      
    })

})
app.listen(8000)
