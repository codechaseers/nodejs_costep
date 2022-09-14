// ejs is a package which is use for templet engine or/ dynamicaly show the data

const express=require('express')
app= express()
// set the ejs
app.set('view engine','ejs')

app.get('/profile',(req,resp)=>{
    
    let employe={
        name:"sudhanshu ",
        email:"sudhanshu@gmail.com",
        job:"developer"
    }
    resp.render('profile',{employe});
})
// send the data dynamically using ejs 


// app.get('/ejs_use',(req,resp)=>{
//     resp.send('<h1>this is ejs use case </h1>')
// })

app.listen(80)