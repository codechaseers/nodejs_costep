const fs = require('fs')
let input = process.argv
console.log(input);
console.log(input[2]);
// lets creat a file using cmd line input
if (input[2] == "add") {

    fs.writeFileSync(input[3], input[4])
}
else if (input[2] == "remove") {
    fs.unlinkSync(input[3])

}
