let a = 10;
let b;
let c = 30;
// async function print() {
//     let a = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(b = 20)
//             console.log(b);
//         }, 2000);
//     })

//     await a;
// }


let po=new Promise((resolve, reject) => {
    for (let index = 0; index <= 20; index++) {
     b = index;

    }
    resolve(b)
})


// for (let index = 0; index <= 20; index++) {
//     b = index;

// }
console.log(a);

po.then((b)=>{
    console.log(b);

})

// console.log(b);

console.log(c);

// set time out is asyncroness function 