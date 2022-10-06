import express, { Router } from "express";
import { getUsers, createUser, getUser } from "../controllers/users.js";


// I created the router
const router = express.Router();
// this routers will return all the users in our server
router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);

export default router;