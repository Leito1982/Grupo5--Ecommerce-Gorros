const fs = require('fs');
const path = require('path');



const Users = {
    //archivo JSON
    fileName: path.join(__dirname, '../dataBase/users.json'),
    //archivo JSON pasado a objeto.
    getData: function () {
       return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    //genera id correlativo
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    //trae todos los usuarios
    findAll: function () {
        return this.getData();
    },
    //busca usuario por id 
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user.id == id);
        return userFound;
    },
    //busca usuario por algo, el primer parametro es ese algo y el segundo es lo que busca
    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user => user[field] == text);
        return userFound;
    },
    //crea un usuario nuevo
    create: function (userData) {
        let allUsers = this.findAll();

        let newUser = {
            id: this.generateId(),
            ...userData,
        };

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    //edita perfil de un usuario
    edit: function (userToEdit, id) {
        let allUsers = this.findAll();
        let newUser = allUsers.map(user => {
        if(user.id == id){
            
            return user = {...userToEdit}
            
        }   
            return user;

        })
        fs.writeFileSync(this.fileName, JSON.stringify(newUser, null, ' '));
    },    
    //elimina un usuario
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }

}

module.exports = Users;