const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

// app.get('/', (req, res) =>{
//     res.sendFile(__dirname+ '/formDB.html');
// })

// app.post('/signup', (req, res) =>{
//     MongoClient.connect(url, function(err, db){
//         if(err) throw err;
//         const dbo = db.db("workers");
//         dbo.collection("worker_detail").insertOne(req.body, function(err, result){
//             if(err) throw err;
//             console.log("data inserted");
//             db.close();
//             res.sendFile(__dirname + '/formExpressSignup.html');

//         })
//     })
// })
app.get('/', (req, res) =>{
    res.sendFile(__dirname+ '/search.html');
})


app.post('/search', (req, res)=>{
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        const dbo = db.db("workers");
        dbo.collection("worker_detail").find(req.body).toArray(function(err, result){
            if(err) throw err;
            res.send(result);
            db.close();
            console.log(result);

        })
    })
} )

app.post('/delete', (req, res)=>{
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        const dbo = db.db("workers");
        dbo.collection("worker_detail").deleteMany(req.body, function(err, result){
            if(err) throw err;
            db.close();
            
            console.log('deleted successfully');
        })
    })
})




app.listen(3000, ()=>{
    console.log('server running ');
});

