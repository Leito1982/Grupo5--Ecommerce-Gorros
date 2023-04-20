const db = require('../../dataBase/models');

const usersAPIController = {
    list: (req, res) => {
        db.User.findAll()

        .then(users => {

            let data = [];

            users.forEach(user => {

                data.push({
                    id: user.id,
                    name: user.first_name,
                    email: user.email,
                    detail: `http://localhost:3000/api/users/${user.id}`
                })
            });

            return res.status(200).json({
                count: users.length,
                users: data,
                status: 200
            })
        })

    },

    detail: (req, res) => {

        db.User.findByPk(req.params.id)

        .then(user => {

            const data = {
                id: user.id,
                name: user.first_name,
                surname: user.last_name,
                email: user.email,
                image: `http://localhost:3000/images/users/${user.image}`
            }
            return res.status(200).json({
                users: data,
                status: 200
            })
                    
        })
    }
}

module.exports = usersAPIController;