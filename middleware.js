const express = require('express');
const apps = express();

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("please provide age");
    }
    else if(req.query.age < 18){
        res.send("you're still underage")
    }
    else {
        next();
    } 
}
apps.use(reqFilter);

apps.get('/', (req, res)=>{
    res.send('welcome to home page');
})




apps.listen(8000);