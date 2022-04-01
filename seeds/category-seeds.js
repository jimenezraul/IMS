const { Category } = require("../models");

const categoryData = [
  {
    name: "Foodservice Supplies",
  },
  {
    name: "Cleaning Supplies",
  },
  {
    name: "Paper Goods",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
