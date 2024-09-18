const express = require("express");
const router = express.Router();
const hashService = require("../../utils/hash/hashService");
const userValidationService = require("../../validation/userValidationService");
const normalizeUser = require("../../model/usersService/helpers/normalizationUserService");
const usersServiceModel = require("../../model/usersService/usersService");
const tokenService = require("../../utils/token/tokenService");
const CustomError = require("../../utils/CustomError");
const authMw = require("../../middleware/authMiddleware");
const permissionsMiddleware = require("../../middleware/permissionsMiddleware");
const chalk = require("chalk");
const customError = require("../../utils/CustomError")
const itemServiceModel = require("../../model/itemsService/itemsService");
const itemsValidationService = require("../../validation/itemsValidationService");
const { updateCart, editCart, restCart } = require("../../model/mongodb/users/userService")


router.post("/", async (req, res) => {
    try {
        const isUserExists = await usersServiceModel.getUserByEmail(req.body.email)
        if (isUserExists) {
            throw new customError("email allredy in use"
            )
        }
        await userValidationService.registerUserValidation(req.body);
        await userValidationService.registerUserValidation(req.body.password);
        req.body.password = await hashService.generateHash(req.body.password);
        req.body = normalizeUser(req.body);
        let newUser = await usersServiceModel.registerUser(req.body);
        res.status(201).json({ msg: "The user has been registerd", newUser });
        console.log(chalk.greenBright("The user has been registerd"))

    } catch (error) {
        res.status(400).json(error);
        console.log(chalk.redBright("Could'nt regester the user", error))

    }
}).get("/", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        const allUsers = await usersServiceModel.getAllUsers();
        res.status(200).json({ allUsers });
        console.log(chalk.greenBright("Successfully acquired all the users"));
    } catch (error) {
        res.status(400).json({ error });
        console.log(chalk.redBright("Could'nt acquired the users", error));

    }
})

router.get("/:id", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        await userValidationService.createUserIdValidation(req.userData._id);
        const userById = await usersServiceModel.getUserById(req.userData._id);
        res.status(200).json({ msg: "Successfully acquired the users", userById });
        console.log(chalk.greenBright("Successfully acquired the users"));

    } catch (error) {
        res.status(400).json({ msg: "invaled id couldnt find the user" });
        console.log(chalk.redBright("Could'nt acquired the users", error));
    }
})
    .put("/:id", authMw, permissionsMiddleware(true, true), async (req, res) => {
        try {
            await userValidationService.createUserIdValidation(req.params.id);
            let userAfterValidation = await userValidationService.updateUserValidation(req.body);
            let userAfterNormlize = await normalizeUser(userAfterValidation);
            const userFromDb = await usersServiceModel.editUser(req.params.id, userAfterNormlize);
            res.status(200).json({ msg: "Successfully edited the user", userFromDb });
            console.log(chalk.greenBright("Successfully edited the user"));

        } catch (error) {
            res.status(400).json(error.response);
            console.log(chalk.redBright("Could'nt edit the user", error));

        }
    })
    .delete("/:id", authMw, permissionsMiddleware(true, true), async (req, res) => {
        try {
            await userValidationService.createUserIdValidation(req.params.id);
            const deletUser = await usersServiceModel.deleteUser(req.params.id)
            if (deletUser) {
                res.json({ msg: "user has been deleted", deletUser })
                console.log(chalk.greenBright("user has been deleted"));
            } else {
                res.json({ msg: "Could not delete the user" })
                console.log(chalk.redBright("Could not delete the user"));
            }
        } catch (error) {
            res.status(400).json(error);
            console.log(chalk.redBright("Could not delete the user", error));

        }

    });

router.post("/login", async (req, res) => {
    try {
        await userValidationService.LoginUserValidation(req.body);
        const userData = await usersServiceModel.getUserByEmail
            (req.body.email);
        if (!userData) throw new CustomError("invaled email or password");
        const isPasswordMatch = await hashService.compereHash(req.body.password, userData.password);
        if (!isPasswordMatch) throw new CustomError("invaled email or password");
        const token = await tokenService.generateToken({
            _id: userData._id,
            isAdmin: userData.isAdmin,
            isUser: userData.isUser,
        })
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json(error);
    }
})

router.patch("/cart", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        await userValidationService.createUserIdValidation(req.userData._id);
        const user = await usersServiceModel.getUserById(req.userData._id)
        await itemsValidationService.createItemIdValidation(req.body.item);
        await itemServiceModel.getItemsById(req.body.item);
        user.cart.push(
            {
                ingredients: req.body.ingredients,
                specialInstruction: req.body.specialInstruction,
                title: req.body.title,
                image: req.body.image,
                price: req.body.price,
            }
        );
        await usersServiceModel.addToCart(user);

        console.log(chalk.greenBright("item has been added to the cart"));
        res.status(200).json({ msg: "item has been added to the cart" })
    } catch (err) {
        console.log(chalk.redBright(err.message));
        return res.status(500).send(err.message);
    }
})
router.get("/cart/get-my-cart", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        await userValidationService.createUserIdValidation(req.userData._id);
        const user = await usersServiceModel.getUserById(req.userData._id)
        const myCart = user.cart
        res.status(200).json({ myCart })

    } catch (err) {
        console.log(chalk.redBright(err.message));
        return res.status(500).send(err.message);
    }
})
router.patch("/cartItem/:id", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        const userId = await userValidationService.createUserIdValidation(req.userData._id);
        await itemsValidationService.createItemIdValidation(req.params.id);
        await updateCart(req.userData._id, req.params.id)
        const user = await usersServiceModel.getUserById(userId)
        res.status(200).json(user.cart)
    } catch (err) {
        console.log(chalk.redBright(err.message));
        return res.status(500).send(err.message);
    }
})
router.put("/cartItem/:id", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        const userId = await userValidationService.createUserIdValidation(req.userData._id);
        await itemsValidationService.createItemIdValidation(req.params.id);
        await editCart(req.userData._id, req.params.id, req.body)
        const user = await usersServiceModel.getUserById(userId)
        res.status(200).json(user.cart)
    } catch (err) {
        console.log(chalk.redBright(err.message));
        return res.status(500).send(err.message);
    }
})
router.patch("/cart/reset", authMw, permissionsMiddleware(true, true), async (req, res) => {
    try {
        const userId = await userValidationService.createUserIdValidation(req.userData._id);
        await restCart(userId)
        res.status(200).json(userId.cart)
    } catch (err) {
        console.log(chalk.redBright(err.message));
        return res.status(500).send(err.message);
    }
})

    .put("/:id", authMw, permissionsMiddleware(true, true), async (req, res) => {
        try {
            await userValidationService.createUserIdValidation(req.params.id);
            let userAfterValidation = await usersServiceModel.registerUserValidation(req.body);
            let userAfterNormlize = await normalizeUser(userAfterValidation);
            const userFromDb = await usersServiceModel.editUser(req.params.id, userAfterNormlize);
            res.status(200).json({ msg: "Successfully edited the user", userFromDb });
            console.log(chalk.greenBright("Successfully edited the user"));

        } catch (error) {
            res.status(400).json(error);
            console.log(chalk.redBright("Could'nt edit the user", error));

        }
    })
module.exports = router;