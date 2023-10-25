const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname,"public")))
    .set("views",path.join(__dirname,"views"))
    .set("view engine","vash")
    .use(express.urlencoded({urlencoded:false}))
    .get("/",(req,res)=> res.sendFile("index.html",{root:__dirname}))
    .use("/api",require("./api/studentApi"))
    .use("/",require("./routes/index"))
    .listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`))