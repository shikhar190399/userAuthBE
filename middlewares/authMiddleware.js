import { jwtSecret } from "../controllers/authController";

export default function (req, res , next ){
    const token = req.header(`Authorization`)?.split(' ')[1];
    if(!token)return res.status(401).json({message: "No token present, access denied"});

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({msg:"Token is not valid"})
    }
}