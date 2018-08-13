const db = require('../config/database').connect();

module.exports = function (app) {
    app.get('/login', (req, res) => {
        try {
            res.render('pages/login', {
                'page': { 'title': 'Login' }
            });
        } catch (error) {
            res.send(error);
        }
    });
};