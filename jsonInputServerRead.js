const http = require('http');
const fs = require('fs');
const prompt = require('prompt-sync')();



var student = new Object();
student.name = prompt("enter the name of the user");
student.age = prompt("enter the age of the student");
student.roll = prompt("enter the roll code of student");

let stud = JSON.stringify(student);
fs.writeFile('./jsonInputfromSever.json', stud, (err)=>{
    if(err) throw err;
     console.log("data  added!");
});

const server = http.createServer(function(req, res){
    fs.readFile('./jsonInputfromSever.json', (err, data)=>{
        if(err) throw err;
        
        let stud = JSON.parse(data);
        res.write(JSON.stringify(stud));
        res.end();
    })

})

server.listen(8000);