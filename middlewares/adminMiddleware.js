function adminMiddleware (req, res, next){
    if(req.session.userLogged && req.session.userLogged.category == 'Admin'){
        return next();
    }
        return res.redirect('/')
};

module.exports = adminMiddleware;