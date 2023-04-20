const db = require('../../dataBase/models');

const usersAPIController = {
    list: (req, res) => {
        db.User.findAll()

        .then(users => {

            return res.status(200).json({
                count: users.length,
                data: users,
                status: 200
            })
        })

    }
}
module.exports = usersAPIController;