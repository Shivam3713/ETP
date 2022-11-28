const http = require("http");

// function  reqListerer(req, res){
//     console.log("inside the server!");
// }
const server= http.createServer((req, res)=>{
    res.end("yes you're request is being called");
    
    console.log("working");
})

server.listen(4000); //the number of times when localhost:3000 is run on the browser it 
// shows in the terminal that you're "inside the server!"

