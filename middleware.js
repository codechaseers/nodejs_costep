const express = require('express')
const app = express()
const route = express.Router()

// lets creat a middleware 
// middleware 1- route lavel middleware 
// middleware 2- single route  middleware 
// middleware 3- diffrent file middleware 
// middleware 4- group of route middleware 


const middle = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please enter your age ")
    }
    else if (req.query.age < 18) {

        resp.send("your are below 18 so you can't acess the site")
    }
    else {

        next()
    }

}
// app.use(middle)           // route lavel middleware 
route.use(middle)           // route lavel middleware 
app.get('/', (req, resp) => {

    resp.send("helo its middleware consept...")

})
app.get('/users', (req, resp) => {       //single route  middleware 

    resp.send("helo its middleware user page...")

})
route.get('/contact',  (req, resp) => {       //single route  middleware 

    resp.send("helo its middleware contact page...")

})
route.get('/services',  (req, resp) => {       //single route  middleware 

    resp.send("helo its middleware services page...")

})

app.use('/',route)

app.listen(80)