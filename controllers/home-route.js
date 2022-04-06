const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { Category, Product, User, Location, Supplier } = require("../models");

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

// Add category
router.get("/add-category", withAuth, (req, res) => {
  res.render("add-category", {
    loggedIn: req.session.loggedIn,
  });
});

// Add product
router.get("/add-product", withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({});
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    const supplierData = await Supplier.findAll({});
    const suppliers = supplierData.map((supplier) =>
      supplier.get({ plain: true })
    );

    res.render("add-product", {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
      categories: categories,
      suppliers: suppliers,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Add supplier
router.get("/add-supplier", withAuth, (req, res) => {
  res.render("add-new-supplier", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
