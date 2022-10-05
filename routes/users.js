import express, { Router } from "express";
import { getUsers } from "./controllers/users";


// I created the router
const router = express.Router();
// this routers will return all the users in our server
router.get("/user", getUsers)