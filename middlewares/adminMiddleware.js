function adminMiddleware (req, res, next){
    if(req.session.userLogged && req.session.userLogged.level.level == 'Admin'){
        return next();
    }
        return res.redirect('/')
};

module.exports = adminMiddleware;