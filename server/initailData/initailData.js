const userData = require("./users.json");
const itemsData = require("./items.json");
const userService = require("../model/usersService/usersService");
const itemService = require("../model/itemsService/itemsService");
const hashService = require("../utils/hash/hashService");
const normlizeUser = require("../model/usersService/helpers/normalizationUserService");
const normlizeItem = require("../model/itemsService/helpers/normalizationItemService");

const initailData = async () => {
    try {
        let items = await itemService.getAllItems();
        if (items.length) {
            return
        }
        let users = await userService.getAllUsers();
        if (users.length) {
            return
        }
        let user_id = "";
        for (let user of userData) {
            user.password = await hashService.generateHash(user.password);
            user = normlizeUser(user);
            user_id = await userService.registerUser(user)
        }
        user_id = user_id._id + "";
        for (let item of itemsData) {
            item = await normlizeItem(item, user_id);
            await itemService.createItem(item);
        }
    } catch (error) {
        console.log("error from initial:", error)
    }


}


module.exports = initailData;