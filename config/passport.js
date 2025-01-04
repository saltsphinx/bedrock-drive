import ps, { use } from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const passport = new ps.Passport();
const prisma = new PrismaClient();

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) return done(null, false, { message: "User not found." });

      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return done(null, false, { message: "Password isn't correct." });

      done(null, user);
    } catch (err) {
      done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
