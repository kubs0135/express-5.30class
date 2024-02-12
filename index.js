const express=require('express');
const indexRouter=require("./routes");
const app=express();

app.use(express.json()); //to allow json as request body
app.use("/",indexRouter);

app.listen(8000,()=>{
    console.log("app is running");
});