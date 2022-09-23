const fs = require('fs')
const path = require('path')              // path module use for cheek path of a file,dir etc 
let dir_path = path.join(__dirname,"files")
console.log(dir_path);
// lets creat 5 file dynamically in files folder

for(i=1;i<=5;i++){
//   fs.writeFileSync(dir_path+"/file"+i+".txt","file number "+i)        // both is working

  fs.writeFileSync(`${dir_path}/file${i}.txt`,`file number = ${i}`)
  //
}
 
// lets get all files

fs.readdir(dir_path,(err,data)=>{
    console.log(data)

    data.forEach((items)=>{
        console.log(items);
        
    })
  
 
})