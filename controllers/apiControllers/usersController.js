const db = require('../../dataBase/models');

const usersAPIController = {
    list: (req, res) => {
        db.User.findAll()

        .then(users => {

            let datos = [];

            users.forEach(user => {

                datos.push({
                    id: user.id,
                    name: user.first_name,
                    email: user.email,
                    detail: `http://localhost:3000/api/users/${user.id}`
                })
            });

            return res.status(200).json({
                count: users.length,
                users: datos,
                status: 200
            })
        })

    }
}
module.exports = usersAPIController;