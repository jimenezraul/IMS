const router = require("express").Router();
const { Category, Product, User, Location } = require("../../models");

// Get all Categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "name"],
        },
      ],
    });
    if (categories.length === 0) {
      res.status(404).json({
        error: "No categories found",
      });
    }
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

// Get one Category
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "name"],
        },
      ],
    });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({
        error: "Category not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// post a new Category
router.post("/", async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
    });
    res.json(category);
  } catch (err) {
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// update a Category
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    await category.update({
      name: req.body.name,
    });
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({
        error: "Category not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// delete a Category
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    await category.destroy();
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

module.exports = router;
