const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{  
    res.sendFile(__dirname + '/getPostMethod.html')
    
    //here in the get() the first one is to assign the post link after localhost:3000/hello
    
})

app.get('/get', function(req,res){
    response = {
        firstName : req.query.username,
        lastname : req.query.lastname,
        email : req.query.email,
        password: req.query.password,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.listen(port, ()=>{
    console.log(`listening to the port no: ${port}`);
});


