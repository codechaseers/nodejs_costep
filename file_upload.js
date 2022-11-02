const express = require('express');
const multer = require('multer');
const app = express()

const upload =  multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"upload file")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now(),".jpg")
        }

    })
}).single("user_dos")


app.post("/upload", upload,(req, resp) => {
    resp.send("file uploaded");

})
app.listen(80)