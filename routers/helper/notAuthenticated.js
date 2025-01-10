export default function notAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    req.flash("messages", "Already signed in.");
    return res.redirect("/");
  }

  next("");
}
