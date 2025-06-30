const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routers")
const viewRoutes = require("./routers/viewRoutes")
const createRoutes = require("./routers/createRoutes")
const updateRoute = require("./routers/updateRoute")
const deleteRoute = require("./routers/deleteRoute")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const PORT = process.env.PORT||3000
mongoose.connect(process.env.MONGODB_URL)
.then(() =>{
console.log("app connected...")

app.listen(PORT, ()=>{
    console.log(`app now listening on ${PORT}`)
})
})
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json())
app.use("/api", viewRoutes)
app.use("/api", createRoutes)
app.use("/api", updateRoute)
app.use("/api", deleteRoute)