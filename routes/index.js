const searchRouter = require('./search');
const SignInRouter = require('./signin');

function route(app) {
    app.use('/search' , searchRouter);
    app.use('/signin' , SignInRouter);
    
}


module.exports = route;