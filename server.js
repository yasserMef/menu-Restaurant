const express = require("express")
const app = express()
const menuRoute = require("./routes/homeRoute")
const contactRoute = require("./routes/contactRoute")
const aboutRoute = require("./routes/abouteRoute")
const addRepasRoute = require("./routes/addRepasRoute")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv = require("dotenv")
const path = require('path')
const fs = require('fs')
const ApiError= require("./utils/ApiError")

dotenv.config({path:".env"})

app.use(cors())
app.use(cookieParser());
app.set("view engine" , "ejs")
app.set("views" , "views")

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const cwd = process.cwd();
    
    const logFilePath = path.resolve(cwd, "logging", "logging.txt");
    
    const logMessage = `[${new Date().toISOString()}], ${req.method}, ${
    req.url
    }, ${req.headers["user-agent"]}, ${req.ip}, ${res.statusCode}\n`;
    
    fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
    console.error("Error writing to log file : ", err);
    }
    });
    
    next();
    })

app.use("",menuRoute)
app.use("/contact",contactRoute)
app.use("/about",aboutRoute)
app.use("/addRepas",addRepasRoute)

app.all("*",(req,res,next)=>{
    next(new ApiError(`Can't find this route: ${req.originalUrl}`,400))
  })
  
  
  app.use((err,req,res,next)=>{
      err.statusCode = err.statusCode || 500 
      err.status = err.status || "error"
      res.status(err.statusCode).json({
          statusCode : err.statusCode,
          status :err.status,
          message:err.message,
          stack : err.stack
      })
  })

app.listen(8000,()=>{
    console.log("app listen")
})