import expressSession from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";
import dotnev from "dotenv";

dotnev.config();

export default expressSession({
  cookie: {
    maxAge: 6 * 60 * 60 * 1000,
  },
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  store: new PrismaSessionStore(new PrismaClient(), {
    checkPeriod: 6 * 60 * 1000,
    dbRecordIdIsSessionId: true,
    dbRecordIdFunction: undefined,
  }),
});
