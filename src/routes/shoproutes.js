const express = require('express');
const router = express.Router();

const userRegister = require('../models/shopOperation')

router.get('/', async (req, res) => {
    const register = await userRegister.find();
        res.json(register);
    });  
    
router.get('/:id', async (req, res)=>{
    const SearchUser = await userRegister.findById(req.params.id);
    res.json(SearchUser);
});

router.post('/', async (req, res) => {
    const {name, email, country, city, password, roul, nameShop} = req.body;
    const register = new userRegister({name, email, country, city, password, roul, nameShop});
    await register.save();
    res.json({status:'register OK!!'});
    }); 
    
router.post('/authenticate', async (req, res)=>{
    const {email, password} = req.body;
    await userRegister.findOne({email}, (err, register)=>{
        if(err){
            res.json({status:'Error authenticate user'});
        }else if(!register){
            res.json({status:'User no Exist!'})
        }else{
            register.isCorrectPassword(password, (err, result)=>{
                if(err){
                    res.json({status:'Error Autheticated password'})
                }else if(result){
                    res.json({status:'User Authenticated correct'})
                }else{
                    res.json({status:'User and password incorrect'})
                }
            });
        }
    });
});
  
router.put('/:id', async(req, res) => {
    const {name, email, country, city, password, roul, nameShop} = req.body; 
    const UpdateuserRegister = {name, email, country, city, password, roul, nameShop};
    await userRegister.findByIdAndUpdate(req.params.id, UpdateuserRegister);
    res.json({status:'User Updated'});
});

router.delete('/:id', async(req, res) => {
    await userRegister.findByIdAndRemove(req.params.id, UpdateuserRegister);
    res.json({status:'User Delete'})

});

module.exports = router;
