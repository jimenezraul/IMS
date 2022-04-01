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
    name: "CLOROX",
    phone: 2149792222,
    email: "clorox@example.com",
    address: "123 Clorox Ave",
    city: "Chicago",
    state: "IL",
    zip: "45678",
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
  {
    name: "GEORGIA PACIFIC",
    phone: 2149795555,
    email: "gp@example.com",
    address: "123 Georgia Ave",
    city: "San Francisco",
    state: "CA",
    zip: "34567",
  },
];

const seedSuppliers = () => Supplier.bulkCreate(supplierData);

module.exports = seedSuppliers;
