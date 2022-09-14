let a = 40;
let b = 10;
let change = new Promise((resp, reject) => {
    setTimeout(() => {
        b = 40
        if (b === 30) {

            resp(30)
        }
        else{
            reject("eroor ")
        }
    }, 2000);
})

change.then((b) => {
    console.log(" >>>>>> ", a + b)
})
change.catch((err) => {
    console.log(err+" b value not = to 30");
 
})




console.log(" >>>>>> ", a + b)
