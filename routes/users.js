import express from "express";
import {
  allUsers,
  createUser,
  findUser,
  deleteUser,
  updatedUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", allUsers);

router.post("/", createUser);

router.get("/:id", findUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updatedUser);

export default router;
