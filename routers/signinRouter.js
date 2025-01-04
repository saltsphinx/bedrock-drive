import * as controllers from "../controllers/controllers.js";
import { Router } from "express";
const signinRouter = Router();

function isntLoggedin(req, res, next) {
  if (req.isAuthenticated()) {
    return next(new Error("Already signed in."));
  }

  next();
}

signinRouter.use(isntLoggedin);

signinRouter.get("/signin", controllers.getSignin);

export default signinRouter;
