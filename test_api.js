const express=require('express')
const app =express();
const router=require('./test_api_route')
 app.use(router)

app.listen(4000)