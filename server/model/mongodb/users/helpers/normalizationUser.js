
const normalizeUser = (userData) => {


    if (!userData.image) {
        userData.image = {}
    }
    userData.image = {
        data: userData.image.data || "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
        alt: userData.image.alt || "user defult picture",
    }
    return {
        ...userData,
        address: {
            ...userData.address,
            houseNumber: userData.address.houseNumber || "",
            street: userData.address.street || "",
        },
    }
}




module.exports = normalizeUser;


