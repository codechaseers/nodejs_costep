// hear we performe crud opperstion on file system
// * what is readFile() and what is readFileSync() in fs ?!?!..🙄

// 1. readFileSync() is synchronous  method  didn't use call back function
// 2. readFile() is asynchronous  method use call back function

// ex: fs.readFile("file_name"(err,data)=>{
// console.log(data);        //err argument print the error and data argu print the data .

// }) 

const fs = require('fs')

// lets creat first a folder
// creat.txt file is created in crud file


//  fs.mkdirSync('crud_file')

//  fs.writeFileSync("crud_file/creat.txt",'crating a file...')


// lets read the file 

// let b_data=fs.readFileSync("crud_file/creat.txt")
// console.log(b_data);                // it provide buffer data

// 'utf-8' is use for transelate the buffer data

// let data = fs.readFileSync("crud_file/creat.txt", "utf-8")
// console.log(data);

// let's  upadte or add new data in to this file 
// data = fs.appendFileSync("crud_file/creat.txt", " file is almost done ")

// data = fs.readFileSync("crud_file/creat.txt", "utf-8")  // gain fatch the upadated data 
// console.log(data);


//let's delet the data
// fs.unlinkSync("crud_file/creat.txt")