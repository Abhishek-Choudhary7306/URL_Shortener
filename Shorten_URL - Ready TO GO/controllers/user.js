const User = require("../models/user");
const {setUser} = require('../services/auth')


async function handleUserSingUp(req,res){
    const {name , email , password} = req.body;
    await User.create({
        name,
        email,
        password    
    })

    return res.redirect('/')
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email,password})
    if(!user){
        return res.render('login',{
            error: "Invalid User or Password"
        });
    } 
    const token = setUser(user);

    res.cookie('token',token);
    return res.redirect('/')
}

async function handleUserLogOut(req,res){
    res.clearCookie('token')
    return res.redirect('/login')
}

module.exports = {handleUserSingUp,handleUserLogin,handleUserLogOut}