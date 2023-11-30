const test_send=(req,resp)=>{
    resp.send(`test api ${req.query.name}`)
    console.log("it is work "+req.query.name);
}
module.exports=test_send