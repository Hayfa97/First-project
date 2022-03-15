const isOrganisator =(req,res,next)=>{
    console.log(req.user);
    if (req.user.role == "client"){
        return res.status(400).send({msg: "not auth (organisator) "})
    }
    next()
}
module.exports = isOrganisator 