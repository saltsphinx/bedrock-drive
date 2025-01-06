import { Router } from "express";
import { getRegister, postRegister } from "../controllers/controllers.js";
import isntLoggedin from "./helper/isntLoggedin.js";
const registerRouter = Router();

registerRouter.use(isntLoggedin);

registerRouter.get("/register", getRegister);
registerRouter.post("/register", postRegister);

export default registerRouter;
