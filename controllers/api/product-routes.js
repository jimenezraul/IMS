const router = require("express").Router();
const { Category, Product, User, Location } = require("../../models");
const Sequelize = require("sequelize");
const { update } = require("../../models/Category");

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
          attributes: ["id", "name"],
        }[
          (Sequelize.literal(
            "(SELECT sum(location.quantity) FROM location WHERE location.product_id=product.id)"
          ),
          "total_inventory")
        ],
        [
          Sequelize.literal(
            "(SELECT sum(location.quantity * product.price ) FROM location WHERE location.product_id=product.id)"
          ),
          "total_inventory_value",
        ],
      ],
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// get one product
router.get("/:id", async (req, res) => {
  try {
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
        }[
          (Sequelize.literal(
            "(SELECT sum(location.quantity) FROM location WHERE location.product_id=product.id)"
          ),
          "total_inventory")
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
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category_id: req.body.category_id,
      user_id: req.body.user_id,
    });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// update a product
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category_id: req.body.category_id,
      user_id: req.body.user_id,
    });
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
