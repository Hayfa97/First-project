const express =require ("express")
const app=express()
const connectDB=require ("./config/connectDB")
const cors=require("cors")
require ("dotenv").config()

connectDB()
const port=process.env.port ||7000
//global middlewares
app.use(express.json())
app.use(cors())
//Routes 
app.use("/user",require("./routes/userRoutes"))
app.use("/post",require("./routes/postRoutes"))
app.use("/profil",require("./routes/postRoutes"))
app.listen(port,(error)=>{
    error?console.log(error):console.log(`server is running at ${port}`);;
})

