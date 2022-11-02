const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/admin");
const userschema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
)
async function datainshert() {
    const usermodel = mongoose.model('users', userschema);
    let data = new usermodel({
        name: "surya kumar yadav",
        age: 24
    })

    data = await data.save()
    console.log(data);
}

datainshert()

// multiple data insherted

// async function datainshertmany() {
//     const usermodel = mongoose.model('users', userschema);
//     let data = new usermodel({
//         name: "surya kumar yadav",
//         age: 24
//     })
//     let data1=new usermodel({
//         name: "Rohit sharma",
//         age: 23
//     })
//      let data2=new usermodel({
//         name: "Ishan  sharma",
//         age: 26
//     })

//     data = await usermodel.insertMany([data,data1,data2])
//     console.log(data);
// }

// datainshertmany()