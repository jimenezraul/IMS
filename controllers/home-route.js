const router = require("express").Router();
const withAuth = require("../utils/auth.js");

router.get("/", (req, res) => {
  res.render("mainpage", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/add-category", withAuth, (req, res) => {
  res.render("add-category", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
