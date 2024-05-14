import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import dotenv from "dotenv";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;  //used cookieParser for accessing the cookie
        if (!token)
        {
            return res.status(401).json({error:"no token, authorization denied"})
        }
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if (!decoded)
        {
            return res.status(401).json({error:"invalid token, authorization denied"})
        }
        
        const user = await User.findById(decoded.userId).select("-password");

        if (!user)
        {
            return res.status(401).json({error:"no user, authorization denied"})
        }
        
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({error:"internal server error"})
    }
    
}

export default protectRoute;