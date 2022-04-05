const { Supplier } = require("../models");

const supplierData = [
  {
    name: "DART",
    phone: 2149791111,
    email: "dart@example.com",
    address: "123 Dart Street",
    city: "New York",
    state: "NY",
    zip: "12345",
  },
  {
    name: "GOJO",
    phone: 2149793333,
    email: "gojo@example.com",
    address: "456 Gojo St",
    city: "Los Angeles",
    state: "CA",
    zip: "78901",
  },
  {
    name: "KIMBERLY CLARK",
    phone: 2149794444,
    email: "kc@example.com",
    address: "789 Kimberly Ave",
    city: "Seattle",
    state: "WA",
    zip: "23456",
  },
];

const seedSuppliers = () => Supplier.bulkCreate(supplierData);

module.exports = seedSuppliers;
