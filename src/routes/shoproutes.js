const express = require('express');
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const router = express.Router();

const userRegister = require('../models/shopOperation')


router.get('/list', async (req, res) => {
    const register = await userRegister.find();
        res.json(register);
    });  
    
router.get('/:id', async (req, res)=>{
    const SearchUser = await userRegister.findById(req.params.id);
    res.json(SearchUser);
});

router.post('/signup', async (req, res) => {
    const {name, email, country, city, password, roul, nameShop} = req.body;
    const register = new userRegister({name, email, country, city, password, roul, nameShop});
    await register.save();
    res.json({status:'register OK!!'});
    }); 

router.post('/login', [body('email', 'Ingrese un email valido').isEmail().exists(), 
                       body('password', 'password debe contener minimo 8 caracteres').isLength({min:8}).exists()], (req, res) =>{
    
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
});
    
/*router.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const login = await userRegister.findOne({email}, (err, register)=>{
    login.findOne();
        if(err){
            res.json({status:'Error login user'});
        }else if(!register){
            res.json({status:'User no Exist!'})
        }else{
            register.isCorrectPassword(password, (err, result)=>{
                if(err){
                    res.json({status:'Error login password'})
                }else if(result){
                    res.json({status:'User login correct'})
                }else{
                    res.json({status:'User and password incorrect'})
                }
            });
        }
    });
});*/
  
router.put('/:id', async(req, res) => {
    const {name, email, country, city, password, roul, nameShop} = req.body; 
    const UpdateuserRegister = {name, email, country, city, password, roul, nameShop};
    await userRegister.findByIdAndUpdate(req.params.id, UpdateuserRegister);
    res.json({status:'User Updated'});
});

router.delete('/:id', async(req, res) => {
    await userRegister.findByIdAndRemove(req.params.id);
    res.json({status:'User Delete'})

});

module.exports = router;
