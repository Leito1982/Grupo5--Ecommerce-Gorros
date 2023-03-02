function authUserSessionMiddleware (req, res, next){
    if(req.session.userLogged && req.session.userLogged.id == req.params.id){
        return next();
    }
        return res.redirect('/')
};

module.exports = authUserSessionMiddleware;