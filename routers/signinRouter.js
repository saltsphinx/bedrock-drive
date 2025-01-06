import * as controllers from "../controllers/controllers.js";
import { Router } from "express";
import passport from "../config/passport.js";
import isntLoggedin from "./helper/isntLoggedin.js";
const signinRouter = Router();

signinRouter.use(isntLoggedin);

signinRouter.get("/signin", controllers.getSignin);

export default signinRouter;
