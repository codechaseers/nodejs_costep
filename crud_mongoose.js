const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/admin");

const userschema = new mongoose.Schema({
    name: String,
    age: Number,
    job: String
})

// inshert wala function 
async function inshert() {
    const usermodel = mongoose.model('users', userschema)
    let data = new usermodel({
    name:"Raju sing",
    age:23,
    job:"ui designer",              
    }
        )
    data=await  data.save()
    console.log(data);
}

// read wala function
async function read(){
    const usermodel = mongoose.model('users', userschema)
    let data= await usermodel.find()
    console.log(data);
}

// delete wala function
async function deletedb(){
    const usermodel = mongoose.model('users', userschema)
    let data= await usermodel.deleteOne({name:"Raju sing"})
    console.log(data);
}

// update wala function 
async function updatedb(){
    const usermodel = mongoose.model('users', userschema)
    let data= await usermodel.updateOne({name:"subham ojha"},
{
    $set:{name:"subham shaw"}
}
)
    console.log(data);
}

updatedb()