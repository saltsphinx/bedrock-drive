import * as controllers from "../controllers/controllers.js";
import { Router } from "express";
import passport from "../config/passport.js";
import notAuthenticated from "./helper/notAuthenticated.js";
const signinRouter = Router();

signinRouter.use(notAuthenticated);

signinRouter.get("/", controllers.getSignin);

export default signinRouter;
