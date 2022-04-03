const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { Category, Product, User, Location, Supplier } = require("../models");

router.get("/", withAuth, async (req, res) => {
  // get all categories
  const categoryData = await Category.findAll({});
  const categories = categoryData.map((category) =>
    category.get({ plain: true })
  );
    
  // get all products
  const productData = await Product.findAll({});
  const product = productData.map((product) => product.get({ plain: true }));

  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    categories: categories,
    products: product,
    title: "Dashboard",
  });
});

// get product by category id
router.get("/category/:id", withAuth, async (req, res) => {
    // get all categories
    const categoryData = await Category.findAll({});
    const categories = categoryData.map((category) =>
        category.get({ plain: true })
    );
    //name of category
    const categoryNameData = await Category.findByPk(req.params.id, {
        attributes: ["name"],
    });
    const category = categoryNameData.get({ plain: true });
    console.log(category.name);
    // get product by category id
    const productData = await Product.findAll({
        where: {
            category_id: req.params.id,
        },
    }); 
    const product = productData.map((product) => product.get({ plain: true }));
    res.render("dashboard", {
        loggedIn: req.session.loggedIn,
        categories: categories,
        products: product,
        title: `Dashboard/${category.name}`,
    });
});

module.exports = router;
