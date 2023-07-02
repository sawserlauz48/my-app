
const normalizeItem = async (item, userId) => {
    if (!item.image) {
        item.image = {}
    }
    item.image = {
        url: item.image.url || "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg",
        alt: item.image.alt || item.title,
    }
    return {
        ...item,
        user_id: item.user_id || userId,
    }
}


module.exports = normalizeItem;
