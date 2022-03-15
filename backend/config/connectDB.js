const mongoose=require("mongoose")
const connectDB =async () =>{
    try {
        await mongoose.connect(process.env.MyURI)
        console.log("db is successfully connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB