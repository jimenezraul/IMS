const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { Category, Product, User, Location, Supplier } = require("../models");
const Sequelize = require("../config/connection");

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
    isCategory: true,
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
    attributes: ["id", "name"],
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
    category: category,
    products: product,
    title: `Dashboard/Category`,
    isCategory: true,
    id: true,
  });
});

// get one product
router.get("/product/:id", withAuth, async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      attributes: [
        "id",
        "name",
        "description",
        "price",
        "units",
        // Get total quantity of of the product
        [
          Sequelize.literal(
            "(SELECT sum(location.quantity) FROM location WHERE location.product_id=product.id AND location.quantity > 0)"
          ),
          "total_quantity",
        ],
        // Get total inventory value of the product
        [
          Sequelize.literal(
            "(SELECT sum(location.quantity * product.price) FROM location WHERE location.product_id=product.id AND location.quantity > 0)"
          ),
          "total_value",
        ],
      ],

      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Category,
          attributes: ["id", "name"],
        },
        {
          model: Supplier,
        },
        {
          model: Location,
          attributes: ["id", "slot", "quantity"],
          include: [
            {
              model: User,
              attributes: ["id", "username"],
            },
          ],
        },
      ],
    });
    const product = productData.get({ plain: true });
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      product: product,
      title: `Dashboard/Product`,
      isProduct: true,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

module.exports = router;
