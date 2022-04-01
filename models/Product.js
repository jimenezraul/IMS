const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      unique: false,
    },
    units: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "supplier",
        key: "id",
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "product",
  }
);

module.exports = Product;
