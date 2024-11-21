import express from "express";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../controllers/server.controllers.js";

const router = express.Router();

router.post("/", postRequest);
router.get("/", getRequest);
router.put("/:id", putRequest);
router.delete("/:id", deleteRequest);

export default router;
