const mongoose=require ("mongoose")
const organisatorProfilSchema = new mongoose.Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId, ref: 'user'
   },
   name: {type:String},
   groupName:{type:String},
   image:{type:String},
   phoneNumber: {type:Number},
   rate: {type:Number},
   description: {type:String} 
})
module.exports = mongoose.model('profil',organisatorProfilSchema)