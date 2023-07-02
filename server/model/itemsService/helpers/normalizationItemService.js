const config = require("config");
const normalizationItemMongo = require("../../mongodb/items/helpers/normalizationitem");
const dbOption = config.get("dbOption");

const normalizeItemService = (item, userId) => {
    if (dbOption === "mongo") {
        return normalizationItemMongo(item, userId)
    }
};

module.exports = normalizeItemService;