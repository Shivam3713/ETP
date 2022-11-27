const express= require('express');
const app=express()
const cookieParser= require('cookie-parser')
app.use(cookieParser())
let users={
    name:"navneet",
    age:20
}
app.get('/set',(req,res)=>{
    res.cookie("userdata:",users)
    res.send('cokkie is set');
})
app.get('/get',(req,res)=>{
    res.send(req.cookies);
})
app.get('/clear',(req,res)=>{
    res.clearCookie('userdata',users);
    res.send('clear cookie')
})
app.listen(4000,()=>{
    console.log('syuifdsghjkhghfdghjkhgf');
})