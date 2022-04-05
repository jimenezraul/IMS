const { User } = require("../../models");

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

// Get user by id
router.get("/:id", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: ["id", "username", "email"],
      where: {
        id: req.params.id,
      },
    });
    if (dbUserData) {
      res.json(dbUserData);
    } else {
      res.json({ message: "No user found with this id" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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

// Update user by id
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      {
        individualHooks: true,
        where: {
          id: req.params.id,
        },
      }
    );
    if (updatedUser[0] > 0) {
      res.json({ message: "User updated successfully" });
    } else {
      res.json({ message: "No user found with this id" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    
    if (dbUserData) {
      const isValidPassword = dbUserData.validatePassword(req.body.password);
      if (isValidPassword) {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
          res.json({ message: "You are now logged in" });
        });
      } else {
        res.json({ message: "Incorrect password" });
      }
    } else {
      res.json({ message: "No user found with this email" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// logout user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// delete user by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedUser > 0) {
      res.json({ message: "User deleted successfully" });
    } else {
      res.json({ message: "No user found with this id" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
