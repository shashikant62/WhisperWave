const express=require('express');
const Condb=require('./config/Database.js');
const app=express();
const PORT=3000;
Condb();
app.get('/',(req,res)=>{
    res.send("hi");
})
app.listen(PORT, function (err){
    if (err) console.log(err);
    console.log("Server listening on PORT",PORT);
})