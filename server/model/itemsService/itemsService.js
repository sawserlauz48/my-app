const config = require("config");
const itemsServiceMongo = require("../mongodb/items/itemService");
const dbOption = config.get("dbOption");

const createItem = (itemToSave) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.createItem(itemToSave)
    }
}

const getAllItems = () => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.getAllItems();
    }
}
const getMyItems = (user_id) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.getMyItems(user_id);
    }
}
const getItemsById = (id) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.getItemsById(id);
    }
}
const getItemByBizNumber = (bizNumber) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.getItemByBizNumber(bizNumber);
    }
}
const updateItem = async (id, itemToUpdate) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.updateItem(id, itemToUpdate);
    }
}
const likeItem = async (itemToSave) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.likeItem(itemToSave);
    }
}
const deleteItem = async (id) => {
    if (dbOption === "mongo") {
        return itemsServiceMongo.deleteItem(id);
    }
}


module.exports = {
    createItem,
    getAllItems,
    getMyItems,
    getItemsById,
    updateItem,
    likeItem,
    deleteItem,
    getItemByBizNumber,

}