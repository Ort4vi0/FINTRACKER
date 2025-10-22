import UserMGS from "../../Models/SchemaUser.js"
import bcrypt from "bcrypt";

async function RegisterUser(req,res) {
    try{
        const {Name, Email, Password} = req.body
        if(!Name || !Email || !Password) res.status(400).send("Dados Obrigatórios em falta!. ")

        const HashPassword = await bcrypt.hash(Password, 12)
        const NewUser = await UserMGS.create({
            Name, Email, Password: HashPassword
        })
        res.status(200).send("Novo Usuario cadastrado!", NewUser)
    } catch(error){
        console.error(error)
        return res.status(500).send("Erro Interno")
    }
}

export {RegisterUser}