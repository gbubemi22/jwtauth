const {User} = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();


router.post("/", async (req, res) => {
   try {
    const {error} = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message)

        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(400).send("Invalide email or password.")

        const validPasaord = await bcrypt.compare(req.body.password, user.password)
        if(!validPasaord) return res.status(400).send("invalid email or password.");

        const token =  user.generateAuthToken();
        res.send(token);
        
   } catch (error) {
     console.log(error);
     res.status(500).send("An error occured");   
   }  
})

const validate = (user) => {
 const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()  
 })   
 return schema.validate(user);
}


module.exports = router;