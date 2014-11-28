exports.render = function(req, res) {
    "use strict";
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('index', {
        title: 'ByrdannFox'
    });
};