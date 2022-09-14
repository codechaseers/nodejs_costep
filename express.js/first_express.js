
const fs=require('fs')
 


const express=require('express')
const app =express()
 app.get('',(req,resp)=>{
    resp.send(`<h1> welcome,this is home page </h1> <a href="/about">go to about page</a>`)
 }) 
 app.get('/about',(req,resp)=>{
    resp.send('<h1> welcome,this is about page </h1> <a href="/">go to home page</a>')
 })
  app.get('/services',(req,resp)=>{
    resp.send('welcome,this is services page')
 }) 
 app.get('/contact',(req,resp)=>{
    resp.send(`<h1>welcome ${req.query.names} , this is contact page</h1>`)
     //print name using Template Literal fatching form url using req.query 
 })
 app.listen(4000)

 