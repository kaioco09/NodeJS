class SignIn {
    signin(req , res){
        res.render('sign_in');
    }
}

module.exports = new SignIn;