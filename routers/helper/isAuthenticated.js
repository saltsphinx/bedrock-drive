export default function isAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash("messages", "You are not authorized.");
    return res.redirect("/login");
  }

  next("");
}
