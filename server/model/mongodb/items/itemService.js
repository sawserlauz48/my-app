const Item = require("./item");
const { ObjectId } = require("mongoose").Types;

const createItem = (itemToSave) => {
    let item = new Item(itemToSave)
    return item.save()
}

const getAllItems = () => {
    return Item.find()
}
const getMyItems = (user_id) => {
    return Item.find({ user_id: new ObjectId(user_id) });
};
const getItemsById = (id) => {
    return Item.findById(id)
}
const getItemByBizNumber = (bizNumber) => {
    return Item.findOne({ bizNumber }, { bizNumber: 1, _id: 0 });
}
const updateItem = async (id, itemToUpdate) => {
    return Item.findByIdAndUpdate(id, itemToUpdate, { new: true })
}
const likeItem = async (itemToSave) => {
    let item = Item(itemToSave)
    return item.save()
}
const deleteItem = async (id) => {
    return Item.findByIdAndDelete(id)
}


module.exports = {
    createItem,
    getAllItems,
    getMyItems,
    getItemsById,
    updateItem,
    likeItem,
    deleteItem,
    getItemByBizNumber

}