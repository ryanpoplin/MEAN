module.exports = function(app) {
    "use strict";
    var index = require('../controllers/index.server.controller.js');
    // no () ?
    app.get('/', index.render);
};