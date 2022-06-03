const { User } = require("../models");

const userData = [
  {
    username: "Raul",
    email: "raul@example.com",
    password: "password",
  },
  {
    username: "Michelle",
    email: "michelle@example.com",
    password: "password",
  },
  {
    username: "Olga",
    email: "olga@example.com",
    password: "password",
  },
  {
    username: "Santiago",
    email: "santiago@example.com",
    password: "password",
  },
  {
    username: "Demo",
    email: "demo@example.com",
    password: "demo1234",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
