const express = require("express")
const user = require("../models/user")
const { validation, profilCheck } = require("../middlewares/validator")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const isAuth = require("../middlewares/passport")
const router = express.Router()
const isOrganisator = require("../middlewares/isOrganisator");
const profil = require("../models/profil");
//add profil
router.post("/profil/:id",isAuth(),isOrganisator,profilCheck(),validation,async (req,res)=>{})
const newProfil = new profil({
    user:req.user.id,
name:req.body.destination,
image:req.body.image,
phoneNumber:req.body.phoneNumber
})
try {
    const Profil = await newProfil.save()
    res.status(200).send({Profil,msg:"profil added"})
} catch (error) {
    res.status(400).send(error)
}
//get profil
router.get ("/getProfil/:id",isAuth(),async (req,res)=>{
    try {
        const profilGet = await profil.findOne({_id:req.params.id}).populate('user',{name:profil.name,phoneNumber:profil.phoneNumber,image:profil.image})
        res.status(200).send(profilGet)
    } catch (error) {
        res.status(400).send(error)
    }

})
//delete profil
router.delete ("/deleteProfil/:id",isAuth(),isOrganisator,async (req,res)=>{
    try {
      
            const deleteProfil= await profil.findByIdAndRemove({ _id: req.params.id });
            res.status(200).send({deleteProfil,msg:"profil delted with success"})
        } catch (error) {
            res.status(400).send({error:"person is not found"});
            
        }
    });
       //findone by name and update
router.put("/updateProfil/:name",isAuth(),isOrganisator ,async (req,res)=>{
    try {
        const updatedProfil= await profil.findOneAndUpdate({name:req.params.name}, { $set: { ...req.body }})
res.status(200).send({updatedProfil,msg:"profil successfully updated"})
    } catch (error) {
        res.status(400).send(error.message)
    }
})