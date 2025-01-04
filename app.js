import express from "express";
import session from "./config/session.js";
import passport from "./config/passport.js";
import dotenv from "dotenv";
import signinRouter from "./routers/signinRouter.js";
import { PrismaClient } from "@prisma/client";
import path from "node:path";

dotenv.config();

const app = express();

app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

app.use(session);
app.use(passport.session());

app.use("/", signinRouter);

app.listen(process.env.PORT);
