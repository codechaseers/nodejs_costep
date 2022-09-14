const express=require("express")
const path =require('path')

let master_path=path.join(__dirname,'html_folder')
const app=express()
// console.log(__dirname);
// console.log(master_path);
//  app.use(express.static(master_path))   // it show the extennsion in url ex"about.html"

app.get('',(req,resp)=>{
    resp.sendFile(`${master_path}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${master_path}/about.html`)
})
app.get('/contact',(req,resp)=>{
    resp.sendFile(`${master_path}/contact.html`)
})
app.get('/services',(req,resp)=>{
    resp.sendFile(`${master_path}/services.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${master_path}/404page.html`)
})


 app.listen(80);