const userController = require('../controller/user')
module.exports = function(app){
    app.route('/login').post(userController.login)
    app.route('/register').post(userController.register)

    app.route('/saveData').post(userController.saveData)
}