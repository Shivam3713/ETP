const express= require('express');
const fs = require('fs');
const app = express();


// fs.writeFile('input.txt', "my name is shivam",(err)=>{
//     if(err) throw err;
//     else console.log('file written successfully');
// })

// fs.readFile('input.txt', (err, data)=>{
//     if(data.length == 0) {
//         console.log("nothing to read from the file");
//     }
//     else if(err){
//         throw err;
//     }
//     else console.log('data ' + data.toString())
// })

// fs.open('input.txt', 'w', (err, file)=>{
//     if(err) throw err;
//     else console.log('saved');
// })

var data = "namaewa uzumaki dattebayo";
fs.appendFile('input.txt', data, 'utf-8',(err)=>{
    if(err) throw err;
    else console.log('data appened!');
})
app.listen(3000);


