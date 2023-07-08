const express = require("express");
const router = express.Router();
const itemServiceModel = require("../../model/itemsService/itemsService");
const itemsValidationService = require("../../validation/itemsValidationService");
const normalizeItem = require("../../model/itemsService/helpers/normalizationItemService");
const authMw = require("../../middleware/authMiddleware");
const permissionsMiddleware = require("../../middleware/permissionsMiddleware");
const chalk = require("chalk");

router.get("/", async (req, res) => {
    try {
        const allItems = await itemServiceModel.getAllItems();
        res.json({ allItems });
        console.log(chalk.greenBright("The items has been found"))

    } catch (error) {
        res.status(400).json(err);
        console.log(chalk.redBright("Could'nt find the items", error))

    }
})
    .post("/", authMw, permissionsMiddleware(true, false, false), async (req, res) => {
        try {
            await itemsValidationService.createItemValidation(req.body);
            let normalItem = await normalizeItem(req.body, req.userData._id);
            const dateFromMongoose = await itemServiceModel.createItem(normalItem);
            res.status(201).json(dateFromMongoose);
            console.log(chalk.greenBright("The items has been created"))
        }
        catch (error) {
            res.status(400).json({ error })
            console.log(chalk.redBright("Could'nt create the items", error))

        }
    });

router.get("/my-items", authMw, async (req, res) => {
    try {
        let allMyItems = await itemServiceModel.getMyItems(req.userData._id);
        if (allMyItems.length === 0) {
            console.log(chalk.greenBright("The user don't have items yet!"));
            return res.json({ msg: "The user don't have items yet!" });
        } else {
            console.log(chalk.greenBright("Fetched the users items"));
            return res.json({ msg: "The user's items:", allMyItems });
        }
    } catch (error) {
        res.status(400).json({ error });
        console.log(chalk.redBright("Could'nt find the items", error))

    }
})

router.get("/:id", async (req, res) => {
    try {
        await itemsValidationService.createItemIdValidation(req.params.id);
        const itemById = await itemServiceModel.getItemsById(req.params.id);
        res.json(itemById);
        console.log(chalk.greenBright("The item has been found"))

    } catch (err) {
        res.status(400).json("invaled id couldnt find the item");
        console.log(chalk.redBright("Could'nt find the item", err))


    }
}).put(("/:id"), authMw, permissionsMiddleware(false, false, true), async (req, res) => {
    try {
        await itemsValidationService.createItemIdValidation(req.params.id);
        let itemAfterValidation = await itemsValidationService.createItemValidation(req.body)
        let itemAfterNormalize = await normalizeItem(itemAfterValidation);
        const itemFromDB = await itemServiceModel.updateItem(req.params.id, itemAfterNormalize);
        res.json({ msg: "The item has been edited", itemFromDB })
        console.log(chalk.greenBright("The item has been edited"))
    } catch (err) {
        res.status(400).json(err);
        console.log(chalk.redBright("Could'nt edit the item", err))

    }

}).patch("/:id", authMw, async (req, res) => {
    try {
        await itemsValidationService.createItemIdValidation(req.params.id);
        const itemToLike = await itemServiceModel.getItemsById(req.params.id);
        const itemLikes = itemToLike.likes.find((id) => id === req.userData._id)
        if (!itemLikes) {
            itemToLike.likes.push(req.userData._id);
            await itemServiceModel.likeItem(itemToLike);
            console.log(chalk.greenBright("The item has been liked"));
            return res.json({ msg: "The item has been liked", itemToLike });
        }
        const itemFilterd = itemToLike.likes.filter((id) => id !== req.userData._id);
        itemToLike.likes = itemFilterd;
        await itemServiceModel.likeItem(itemToLike);
        console.log(chalk.greenBright("The item has been unliked"));
        return res.json({ msg: "The item has been unliked", itemToLike });
    } catch (err) {
        console.log(chalk.redBright("Could not edit like:", err.message));
        return res.status(500).send(err.message);
    }
})
    .delete("/:id", authMw, permissionsMiddleware(false, false, true), async (req, res) => {
        try {
            await itemsValidationService.createItemIdValidation(req.params.id);
            const deletItem = await itemServiceModel.deleteItem(req.params.id)
            if (deletItem) {
                res.json({ msg: "item has been deleted", deletItem })
                console.log(chalk.greenBright("The item has been deleted"))
            } else {
                res.json({ msg: "Could not find the item" })
                console.log(chalk.redBright("Could not find the item"))
            }
        } catch (err) {
            res.status(400).json(err);
        }

    });


module.exports = router;