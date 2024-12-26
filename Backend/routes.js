import express from "express";
import { getFavorites, saveFavorite } from "./controller.js";

const router = express.Router();

router.route("").get(getFavorites).post(saveFavorite);

export default router
