const express=require("express");
const connectDb=require("./config/dbconnection");
const dotenv=require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000
const errorHandler=require("./middleware/errorHandler");


connectDb();
app.use(express.json()); 
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server running on port  is ${port}`);
});
