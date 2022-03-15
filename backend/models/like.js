const mongoose=require('mongoose');
const likeSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    likeCount: {
        type: Number,
        default: 0,
    }
})
module.exports=mongoose.model('like', likeSchema);