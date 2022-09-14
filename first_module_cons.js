//module are  three types 
//1. core module (inbuiled modules: fs ,http,console,ets)
//2. gobal module (ex: console didn't  use requierd)
//2. locaal module/
//3. third party module/
console.log("console is a global module");
// const file=require('fs');
// file.writeFileSync("chinku.txt","Chinku nam to suna hi hoga")

// we can also use this type
const fi=require("fs").writeFileSync;

fi("new.txt","kuch nahi he")
 
console.log(__dirname);  // directory name print
console.log(__filename); // file name print