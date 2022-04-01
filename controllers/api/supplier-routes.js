const router = require("express").Router();
const { Product, Category, User, Location, Supplier } = require("../../models");

// Get all Suppliers
router.get("/", async (req, res) => {
  try {
    const locations = await Supplier.findAll({});
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

//Get Supplier by id
router.get("/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id, {});
    res.json(supplier);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

// Create a new Supplier
router.post("/", async (req, res) => {
  try {
    const location = await Supplier.create(req.body);
    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
});

// Update a Supplier
router.put("/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      await supplier.update(req.body);
      res.json(supplier);
    } else {
      res.status(404).json({
        error: "Supplier not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

// Delete a Supplier
router.delete("/:id", async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      await supplier.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({
        error: "Supplier not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
