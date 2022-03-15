const mongoose=require('mongoose');

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    },
    title: String,
    details: String,
    creator: String,
    tags: [String],
    date : String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})


 module.exports=mongoose.model('post', postSchema);