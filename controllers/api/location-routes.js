const router = require("express").Router();
const { json } = require("express/lib/response");
const { Category, Product, User, Location } = require("../../models");

// Get all locations
router.get("/", async (req, res) => {
  try {
      const locations = await Location.findAll({
          attributes: ["id", "slot", "quantity"],
      }
          
    );
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
    });
  }
});

// Get one location
router.get("/:id", async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "slot", "quantity"],
        },
      ],
    });

    const location = locationData.map((location) => {
      location.get({ plain: true });
    });

    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
});

// post a new location
router.post("/", async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
});

// Update a location
router.put("/:id", async (req, res) => {
  try {
    const location = await Location.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(location);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

// Delete a location
router.delete("/:id", async (req, res) => {
  try {
    const location = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (location > 0) {
      res.json({
        message: "Location deleted",
      });
    } else {
      res.status(404).json({
        error: "Location not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An unexpected error occurred",
    });
  }
});

module.exports = router;
