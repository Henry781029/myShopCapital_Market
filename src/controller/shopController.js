const User = require('../models/shopOperation');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

/*exports.validarUsuario = async(req, res) =>{
    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(400).json({Errores: errores.array()})
    }

    const {email, password} = req.body;

    try{
        let usuario = await User.findOne({email})
        if(!usuario){
            return res.status(400).json({ msg: 'El user no exist!!!'});
        }

        const passCorrecto = await bcrypt.compare(password, usuario.password);
        if(!passCorrecto){
            return res.status(400).json({ msg: 'pasword incorrect'});
        }

    }
}*/