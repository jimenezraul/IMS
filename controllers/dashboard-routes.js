const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { Category, Product, User, Location, Supplier } = require("../models");

router.get("/", withAuth, async (req, res) => {
  // get all categories
    const categoryData = await Category.findAll({});
  const category = categoryData.map((category) =>
    category.get({ plain: true })
  );
  // get all products
  const productData = await Product.findAll({});
  const product = productData.map((product) => product.get({ plain: true }));

  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    categories: category,
    products: product,
    title: "All Products",
  });
});


module.exports = router;
