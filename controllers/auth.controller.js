const User=require('../models/user.models');

function getSignup(req,res){
    res.render('../views/customer/auth/signup');
}

async function signup(req,res){
    const user=new User(req.body.email,req.body.password,req.body.fullname,req.body.street,req.body.postal,req.body.city);

    await user.signup();

    res.redirect('/login');
}

function getLogin(req,res){
    res.render('../views/customer/auth/login');
}

module.exports={
    getSignup:getSignup,
    signup:signup,
    getLogin:getLogin
}
