const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const {check, validationResult} = require('express-validator') //this is for validation in express
app.use(express.urlencoded());

//this is get post method from express

//
//app.use(express.static('public'));
app.get('/', (req, res)=>{  
    res.sendFile(__dirname + '/getPostMethod.html')
    
    //here in the get() the first one is to assign the post link after localhost:3000/hello
    
})


app.post('/get', [
    check('username').isAlpha().withMessage('only alphabets').isLength({min:8, max: 20}).withMessage('name lenght between 8-20'),
    check('lastname').isAlpha().withMessage('only alphabets').isLength({min: 8, max: 20}).withMessage('length between 8-20'),
    check('email').isEmail().withMessage('valid emails only'),
    check('password').isLength({min: 8, max:20}).withMessage('password length between 8-20')


] , function(req,res){
    const errors = validationResult(req)
    if(!errors.isEmpty()) res.send(errors);
    else {
    response = {
        firstName : req.query.username,
        lastname : req.query.lastname,
        email : req.query.email,
        password: req.query.password,
    };

    console.log(response);
    // res.end(JSON.stringify(response));
    let data = JSON.stringify(response);
    console.log(data);
}
});

app.listen(port, ()=>{
    console.log(`listening to the port no: ${port}`);
});
