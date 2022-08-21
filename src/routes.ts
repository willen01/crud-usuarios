import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

//create.
router.post("/users", UserController.create);

//read.
router.get("/users", UserController.findAll);

//read.
router.get("/users/:userID", UserController.findOne);

//update
router.put("/users/:userID", UserController.update);

//delete.
router.delete("/users/:userID", UserController.delete);

export { router };
