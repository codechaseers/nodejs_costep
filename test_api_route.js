const express=require('express')
const app =express()
const router =express.Router()
const test_send=require('./test_api_control')
router.route('/test').get(test_send)

 
 module.exports=router