async function Hello(req,res) {
    return res.status(200).json({sucess: 'Seu ID é: ' + req.user.userId})
}

export {Hello}