import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

//create.
router.post("/users", UserController.create);

//read.
router.get("/users", UserController.findAll);

//read.
router.get("/users/:userid", UserController.findOne);

//update
router.put("/users/:userid", UserController.update);

//delete.
router.delete("/users/:userID", UserController.delete);

export { router };
