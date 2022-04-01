const Category = require("./Category");
const User = require("./User");
const Product = require("./Product");
const Supplier = require("./Supplier");
const Location = require("./Location");

User.hasMany(Product, {
  foreignKey: "user_id",
});
Product.belongsTo(User, {
  foreignKey: "user_id",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
Category.hasMany(Product, {
  foreignKey: "category_id",
});
Product.belongsTo(Supplier, {
  foreignKey: "supplier_id",
});
Supplier.hasMany(Product, {
  foreignKey: "supplier_id",
});
Product.hasMany(Location, {
  foreignKey: "product_id",
});
Location.belongsTo(Product, {
  foreignKey: "product_id",
});
Location.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  Category,
  User,
  Product,
  Supplier,
  Location,
};
