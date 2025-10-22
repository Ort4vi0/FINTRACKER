import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserMGS from "../../Models/SchemaUser.js";

async function LoginUser(req,res) {
    try {
        const {Email, Password} = req.body
        const user = await UserMGS.findOne({Email})
        if(!user) return res.status(404).json({error: "Usuário não foi encontrado!"})
        
        const VerifyPass = await bcrypt.compare(Password, user.Password)
        if (!VerifyPass) return res.status(401).json({ error: 'Senha incorreta' });

        const secret = process.env.JWT_SECRET
        if (!secret) return res.status(500).json({ error: 'JWT_SECRET não configurado' });

        const token = jwt.sign({userId: user._id}, secret, {expiresIn: '1h'})

        res.json({ message: 'Login realizado com sucesso!', token });
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor', details: error.message });
    }
}

export {LoginUser}