const User = require("../../models/User");

const router = require("express").Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: ["id", "username", "email"],
    });
    if (dbUserData.length > 0) {
      res.json(dbUserData);
    } else {
      res.json({ message: "No users found" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
      
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
