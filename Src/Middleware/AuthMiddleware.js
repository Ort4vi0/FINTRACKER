import jwt from "jsonwebtoken";

function AuthMiddleware(req,res,next){
    const AuthHeader = req.headers.authorization
    if (!AuthHeader) return res.status(401).send("Token Inválido")
    const token = AuthHeader.startsWith('Bearer ') ? AuthHeader.slice(7) : AuthHeader;
    
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) return res.status(500).send("WT_SECRET Inválido")
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send("Token Inválido")
    }
}

export {AuthMiddleware}