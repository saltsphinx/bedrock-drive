import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export function getSignin(req, res) {
  res.render("signin");
}

export function getRegister(req, res) {
  res.render("register");
}

export async function postRegister(req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hash,
      },
    });

    res.render("signin");
  } catch (err) {
    next(err);
  }
}

export function deleteSession(req, res) {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }

    res.end();
  });
}
