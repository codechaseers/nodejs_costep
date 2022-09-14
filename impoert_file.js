//
 
let domy=require('./domy.js')
// console.log(domy);
// console.log(domy.name);
 
 
// in array type of string we can not display founction directley
 
domy.forEach(element => {
    console.warn(element.grit());

    
});



const arr=[56,8,6,86,86,95,95,95]
let resulet= arr.filter((item)=>{

 return item===6;
})
console.log(resulet);

// in '==='  the last = use for check type or data type