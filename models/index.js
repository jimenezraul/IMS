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
  onDelete: "CASCADE",
});
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Product.belongsTo(Supplier, {
  foreignKey: "supplier_id",
  onDelete: "CASCADE",
});
Supplier.hasMany(Product, {
  foreignKey: "supplier_id",
  onDelete: "CASCADE",
});
Product.hasMany(Location, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Location.belongsTo(Product, {
  foreignKey: "product_id", 
  onDelete: "CASCADE",
});
Location.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  Category,
  User,
  Product,
  Supplier,
  Location,
};
