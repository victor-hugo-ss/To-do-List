const { DataTypes } = require("sequelize");

const db = require("../database/conn");
const User = require("./User");

const Address = db.define("Address", {
  zipcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
