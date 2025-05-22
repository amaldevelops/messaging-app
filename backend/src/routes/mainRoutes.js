import { Router } from "express";

import { homePage } from "../controllers/mainController.js";

const mainRouter = Router();

mainRouter.get("/", homePage);

export default mainRouter;
