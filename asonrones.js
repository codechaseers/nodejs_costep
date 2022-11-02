let a = 40;
let b = 10;
 async function change(){ 
    let changed =new Promise((resp, reject) => {
    setTimeout(() => {
        b = 30
        if (b === 30) {

            resp(30)
        }
        else{
            reject("eroor ")
        }
    }, 2000);
})
let new_b= await changed;

console.log(" >>>>>> ", a + new_b)
}

// change.then((b) => {
    //     console.log(" >>>>>> ", a + b)
    // })
    // change.catch((err) => {
        //     console.log(err+" b value not = to 30");
        
        // })
        
        // now i handel this using asynic awit  
        
        
        console.log(" ////>>>>>> ", a + b)
        change();
console.log(" ////>>>>>> ")
