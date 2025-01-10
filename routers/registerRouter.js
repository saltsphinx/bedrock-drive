import { Router } from "express";
import { getRegister, postRegister } from "../controllers/controllers.js";
import notAuthenticated from "./helper/notAuthenticated.js";
const registerRouter = Router();

registerRouter.use(notAuthenticated);

registerRouter.get("/", getRegister);
registerRouter.post("/", postRegister);

export default registerRouter;
