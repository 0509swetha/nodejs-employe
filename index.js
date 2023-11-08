const express=require("express");
const app=express();
app.use(express.json());
const userrouter=require("./router/userrouter")
app.use(userrouter);
app.listen(2000,()=>{
    console.log("user running on 2000 port");
});