const seedCategories = require("./category-seeds");
const seedUsers = require("./user-seeds");
const seedProducts = require("./product-seeds");
const seedSuppliers = require("./supplier-seeds");
const seedLocations = require("./location-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedCategories();
    await seedUsers();
    await seedSuppliers();
    await seedProducts();
    await seedLocations();
  }
  catch (err) {
    console.log(err.message);
  }
};

seedAll();
