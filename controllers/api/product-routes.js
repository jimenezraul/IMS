const router = require("express").Router();
const { Category, Product, User, Location } = require("../../models");
const Sequelize = require("../../config/connection");

//get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
        {
          model: Location,
          attributes: ["id", "slot", "quantity"],
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
    const product_by_id = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Location,
          attributes: ["id", "slot", "quantity"],
        },
      ],
    });
    if (product_by_id.locations.length > 0) {
      const product = await Product.findByPk(req.params.id, {
        include: [
          {
            model: Category,
            attributes: ["id", "name"],
          },
          {
            model: User,
            attributes: ["id", "username"],
          },
          {
            model: Location,
            attributes: ["id", "name"],
          },
          [
            (Sequelize.literal(
              "(SELECT sum(location.quantity) FROM location WHERE location.product_id=product.id)"
            ),
            "total_inventory"),
          ],
          [
            Sequelize.literal(
              "(SELECT sum(location.quantity * product.price ) FROM location WHERE location.product_id=product.id)"
            ),
            "total_inventory_value",
          ],
        ],
      });
      res.json(product);
    } else {
      res.status(404).json({
        error: "Product has no inventory",
      });
    }
  } catch (err) {
    console.error(err);
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
