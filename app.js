import express from "express";
import session from "./config/session.js";
import passport from "./config/passport.js";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();

app.set("view", "./views");
app.set("view engine", "ejs");

app.use(session);
app.use(passport());

app.listen(process.env.PORT);
