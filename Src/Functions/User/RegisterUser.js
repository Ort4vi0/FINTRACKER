async function RegisterUser(req,res) {
    const {Name, Email, Senha} = req.body
    if(!Name || !Email || !Senha) res.status(400).send("Dados ")
}