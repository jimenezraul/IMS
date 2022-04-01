const { Location } = require("../models");

const locationData = [
  // Product 1
  {
    slot: "A100C1",
    product_id: 1,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 1,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 1,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 1,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 1,
    user_id: 1,
    quantity: 50,
  },
  // Product 2
  {
    slot: "A100C1",
    product_id: 2,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 2,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 2,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 2,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 2,
    user_id: 1,
    quantity: 100,
  },
  // Product 3
  {
    slot: "A100C1",
    product_id: 3,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 3,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 3,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 3,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 3,
    user_id: 1,
    quantity: 100,
  },
  // Product 4
  {
    slot: "A100C1",
    product_id: 4,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 4,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 4,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 4,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 4,
    user_id: 1,
    quantity: 100,
  },
  // Product 5
  {
    slot: "A100C1",
    product_id: 5,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 5,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 5,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 5,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 5,
    user_id: 1,
    quantity: 100,
  },
  // Product 6
  {
    slot: "A100C1",
    product_id: 6,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 6,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 6,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 6,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 6,
    user_id: 1,
    quantity: 100,
  },
  // Product 7
  {
    slot: "A100C1",
    product_id: 7,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 7,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 7,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 7,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 7,
    user_id: 1,
    quantity: 100,
  },
  // Product 8
  {
    slot: "A100C1",
    product_id: 8,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 8,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 8,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 8,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 8,
    user_id: 1,
    quantity: 100,
  },
  // Product 9
  {
    slot: "A100C1",
    product_id: 9,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 9,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 9,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 9,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 9,
    user_id: 1,
    quantity: 100,
  },
  // Product 10
  {
    slot: "A100C1",
    product_id: 10,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 10,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 10,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 10,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 10,
    user_id: 1,
    quantity: 100,
  },
  // Product 11
  {
    slot: "A100C1",
    product_id: 11,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 11,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 11,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 11,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 11,
    user_id: 1,
    quantity: 100,
  },
  // Product 12
  {
    slot: "A100C1",
    product_id: 12,
    user_id: 1,
    quantity: 50,
  },
  {
    slot: "H125D1",
    product_id: 12,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "D010E1",
    product_id: 12,
    user_id: 1,
    quantity: 150,
  },
  {
    slot: "C023C1",
    product_id: 12,
    user_id: 4,
    quantity: 50,
  },
  {
    slot: "F059D1",
    product_id: 12,
    user_id: 1,
    quantity: 100,
  },
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
