import express from "express";
import session from "./config/session.js";
import fileUpload from "express-fileupload";
import passport from "./config/passport.js";
import dotenv from "dotenv";
import signinRouter from "./routers/signinRouter.js";
import registerRouter from "./routers/registerRouter.js";
import sessionRouter from "./routers/sessionRouter.js";
import filesRouter from "./routers/filesRouter.js";
import { PrismaClient } from "@prisma/client";
import flash from "connect-flash";
import path from "node:path";

dotenv.config();

const app = express();

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "pug");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(session);
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;

  next();
});

app.get("/", (req, res) => res.render("index"));

app.use("/session", sessionRouter);
app.use("/signin", signinRouter);
app.use("/register", registerRouter);
app.use("/files", filesRouter);

app.listen(process.env.PORT);
