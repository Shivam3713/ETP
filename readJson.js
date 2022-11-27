// const fs = require('fs');
// fs.readFile("./student.json", (err, data)=>{
//     if(err) throw err;
//     let stud=JSON.parse(data);
//     let dat=JSON.stringify(stud)
//     console.log(dat);
// })

const fs= require('fs');
fs.readFile('./ninja.json', (err, data) =>{
    if(err) throw err;
    else{
        let nin = JSON.parse(data);
        console.log(JSON.stringify(nin));
    }
})
