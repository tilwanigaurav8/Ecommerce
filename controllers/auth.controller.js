function getSignup(req,res){
    res.render('../views/customer/auth/signup');
}

function signup(req,res){
    
}

function getLogin(req,res){
    res.render('../views/customer/auth/login');
}

module.exports={
    getSignup:getSignup,
    signup:signup,
    getLogin:getLogin
}
