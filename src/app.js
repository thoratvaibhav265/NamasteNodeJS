
const express=require("express");

const app=express();

 app.use("/test",(req,res)=>{
   res.send("Hello from the server");
 });

 app.use("/hello",(req,res)=>{
   res.send("Hello from the server app hello route");
 });

 app.listen(3000,()=>{
   console.log("server issuccessfully listening to the port...");
 });