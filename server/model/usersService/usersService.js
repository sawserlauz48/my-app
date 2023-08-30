const config = require("config");
const usersServiceMongo = require("../mongodb/users/userService");
const dbOption = config.get("dbOption");


const registerUser = (userData) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.registerUser(userData)
    }
}

const loginUser = () => {
    if (dbOption === "mongo") {
        return usersServiceMongo.loginUser()
    }
}
const getAllUsers = () => {
    if (dbOption === "mongo") {
        return usersServiceMongo.getAllUsers()
    }
}
const getUserById = (id) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.getUserById(id)
    }
}
const editUser = (id, UserToUpdate) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.editUser(id, UserToUpdate)
    }
}
const deleteUser = (id) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.deleteUser(id)
    }
}

const getUserByEmail = (email) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.getUserByEmail(email)
    }
}
const bizUserChange = async (filter, update) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.bizUserChange(filter, update)
    }
}
const addToCart = async (itemToSave) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.addToCart(itemToSave);
    }
}
const updateCart = async (userId, itemToDelete) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.updateCart(userId, itemToDelete);
    }
}
const editCart = async (userId, itemToDelete, payload) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.editCart(userId, itemToDelete, payload);
    }
}
const restCart = async (userId) => {
    if (dbOption === "mongo") {
        return usersServiceMongo.restCart(userId);
    }
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    editUser,
    deleteUser,
    getUserByEmail,
    bizUserChange,
    addToCart,
    updateCart,
    editCart,
    restCart
}