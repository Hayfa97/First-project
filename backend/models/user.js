const mongoose=require("mongoose")
 const userSchema =new mongoose.Schema({
     fullName: {type:String},
     email: {type:String,lowercase:true,trim:true},
     password:{type:String},
     gender:{type:String},
     role:{type:String,enum:["client","organisator","superAdmin"],default:"client"},
     groupName:{type:String},
     image:{type:String},
     phoneNumber: {type:Number},
     rate: {type:Number},
     description: {type:String}, 
     photoCouverture: {type:String}
 })
 module.exports=mongoose.model("user",userSchema) 