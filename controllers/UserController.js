const { where } = require("sequelize");
const User = require("../models/User");
const { raw } = require("express");

module.exports = class UserController {
  static async showUsers(req, res) {
    const users = await User.findAll({ raw: true });
    res.render("users/all", { users });
  }
};
