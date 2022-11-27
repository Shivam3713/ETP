// const fs= require('fs');
// var data = {
//     name : "shivam",
//     age : 22,
//     gender: "straight male"
// }
// let stud=JSON.stringify(data)
// fs.writeFile('./kuchbhi.json', stud, (err)=>{
//     if(err) throw err;
//     console.log('write file successfully');

// })

const fs = require('fs');
var konoha ={
    name: "naruto",
    age: 22,
    gender: "male"
}

let ninja = JSON.stringify(konoha);
fs.writeFile('ninja.json', ninja, (err)=>{
    if(err) throw err;
    else console.log('write file success!');
})

