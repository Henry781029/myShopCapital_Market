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
  
router.put('/:id', async(req, res) => {
    const {name, email, country, city, password, roul, nameShop} = req.body; 
    const UpdateuserRegister = {name, email, country, city, password, roul, nameShop};
    await userRegister.findByIdAndUpdate(req.params.id, UpdateuserRegister);
    res.json({status:'User Udated'});
});

router.delete('/:id', async(req, res) => {
    await userRegister.findByIdAndRemove(req.params.id, UpdateuserRegister);
    res.json({status:'User Delete'})

});

module.exports = router;
