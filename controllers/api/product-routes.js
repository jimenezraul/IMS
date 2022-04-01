const router = require("express").Router();
const { Category, Product, User, Location, Supplier } = require("../../models");
const Sequelize = require("../../config/connection");

//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "description", "price", "units"],
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
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// get one product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
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
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({
        error: "Product has no inventory",
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// create a product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// update a product
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

//delete a product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

module.exports = router;
