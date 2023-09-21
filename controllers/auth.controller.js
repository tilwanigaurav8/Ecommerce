function getSignup(req,res){
    res.render('../views/customer/auth/signup');
}

function getLogin(req,res){
    res.render('../views/customer/auth/login');
}

module.exports={
    getSignup:getSignup,
    getLogin:getLogin
}
