import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {

    const token = req.cookies.token //accede a la cookie directamente

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({message: "invalid token"});        
        
        req.user = user
        next();
    })

};