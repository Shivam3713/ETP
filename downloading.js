// const express = require('express');
// const app= express();

// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+'/downloading.html');
// });

// app.get("/thisPage", (req, res)=>{
//     res.download('./demo.txt', function(err){
//         if(err) console.log(err);
//         else console.log("file downloaded successfully");
//     })
// })

// app.listen(3000,()=>{
//     console.log(`sdfhjk 3000`)
// })



const express= require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/downloading.html');
})

app.get('/thisPage', (req, res)=>{
    res.download('./demo.txt', function(err){
        if(err) console.log(err);
        else console.log('file downloded');
    })
})

app.listen(3000);


