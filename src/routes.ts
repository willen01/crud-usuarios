import express from "express";

const router = express.Router();

//create.
router.post("/users", async () => {});

//read.
router.get("/users", async () => {});

//read.
router.get("/users/:userID", async () => {});

//update
router.put("/users/:userID", async () => {});

//delete.
router.put("/users/:userID", async () => {});

export { router };