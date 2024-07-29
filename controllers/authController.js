
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import User from '../src/models/user.js';

export const jwtSecret = "userAuth";

export const signup = async (req, res) => {
    const {name, email, password} = req.body;

    try{
        let user = User.findOne(req.body);
        // if(user) return res.status(400).json({message:"User already present"});

        user = new User({name, email,  password});
        const saltKey = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, saltKey);
        await user.save();

        const payload = {user : {id: user.id}};
        jwt.sign(payload, jwtSecret, {expiresIn : '2h'}, (err, token ) => {
            if(err)throw err;
            res.json({token})
        })

    } catch(err){
        res.status(500).send (`Error occured ${err.message}`);
    }
}

export const login = async ( req, res ) => {
    const { email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "User not present or registered"});

        const passMatch = bcrypt.compare(password, user.password);
        if(!passMatch) return res.status(400).json({message: "Invlaid Password"});

        const payload = {user : {id: user.id}};
        jwt.sign(payload, jwtSecret, {expiresIn : '2h'}, (err, token ) => {
            if(err)throw err;
            res.json({token: token, message:"Signed in Successfully"})
        })
    } catch(err){
        res.status(500).send (`Error occured ${err.message}`);
    }
}