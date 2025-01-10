import { Router } from "express";
import { deleteSession } from "../controllers/controllers.js";
import passport from "../config/passport.js";
const sessionRouter = Router();

sessionRouter.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/signin",
    successMessage: "You successfully signed in.",
    failureMessage: "You failed to sign in.",
  })
);

sessionRouter.delete("/", deleteSession);

export default sessionRouter;
