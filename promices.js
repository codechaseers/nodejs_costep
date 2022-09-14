// callback is basically  a function take input as a function  
// it is basically used for handel the syncrones data

let students = [
  { name: "Subham", sub: "java" },
  { name: "Rohan", sub: "java script" },
  { name: "Sudhanshu", sub: "python" },
]

// function addstudents(student) {
//     setTimeout(() => {
//       students.push(student)
//     }, 3000);
//     }


// let new_student={name:"Hari",sub:"c++"}
// addstudents(new_student)        // this function take 3 second time to add a student 
// console.log(students);      // it can't show the newley add student it's a drawback...😒


// now handel it using promices...🤷‍♀️

let promise=new Promise((resolve, reject) => {
    function addstudents(student) {
        setTimeout(() => {

            resolve( students.push(student))

        }, 1000);
        }
        let new_student={name:"Hari",sub:"c++"}
addstudents(new_student) 
})
promise.then(()=>{
    console.log(students);

})

 