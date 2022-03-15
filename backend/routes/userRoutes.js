const express= require ("express")
const user =require ("../models/user")
const {validation,registerCheck,loginCheck}=require ("../middlewares/validation")
const bcrypt =require("bcrypt")
const jwt =require ('jsonwebtoken')
const isAuth = require ("../middlewares/passport")
const router= express.Router()
const isOrganisator = require("../middlewares/isOrganisator")

//test
router.get("/test",(req,res)=>{
    res.send("ye rabbi la3mel 3lik")
})
//registring
router.post("/register", registerCheck(), validation, async (req, res) => {
    const { email, password } = req.body
    try {
        const existuser = await user.findOne({ email })
        if (existuser) {
            return res.status(400).send({ msg: "user already exist, please login" })
        }
        const newuser = new user({ ...req.body })
        const hashedPassword = await bcrypt.hash(password, 10)
        newuser.password = hashedPassword
        await newuser.save()
        res.send({ user: newuser, msg: "user successfully registered" })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})
//login user
router.post("/login", loginCheck(), validation, async (req, res) => {
    const { email, password } = req.body
    try {
        const existuser = await user.findOne({ email })
        if (!existuser) {
            return res.status(400).send({ msg: "bad credantial " })
        }
        const isMatched = await bcrypt.compare(password, existuser.password)
        //console.log(isMatched);
        if (!isMatched) {
            return res.status(400).send({ msg: "bad credantial !" })
        }
        const payload = {
            _id: existuser._id,
            name: existuser.fullName
        }
        const token = await jwt.sign(payload, process.env.secret)
        //console.log(token);
        existuser.password = undefined
        res.send({ user: existuser, token: token })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})
// get current user
router.get("/current", isAuth(), async (req, res) => {
    console.log(req.user);
    res.send({user:req.user})
})

//get all users (acces organisator)

router.get("/allusers", isAuth(), isOrganisator, async (req, res) => {
    try {
        const allusers = await user.find()
        res.send({ allusers })
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//find user by id and remove
router.delete("/deleteById/:id", async (req,res)=>{
    try {
        const fndUserByIdRmv= await user.findByIdAndRemove({ _id: req.params.id });
        res.status(200).send({fndUserByIdRmv,msg:"delted with success"})
    } catch (error) {
        res.status(400).send({error:"person is not found"});
        
    }
});
//findone and update
router.put("/update/:id" ,async (req,res)=>{
    try {
        const findOneToUpdate= await user.findOneAndUpdate({_id:req.params.id}, { $set: { ...req.body }})
res.send(findOneToUpdate)
    } catch (error) {
        res.status(400).send(error.message)
    }
})
module.exports=router