import { DataTypes } from "sequelize";
import db from "../db/connection";
const bcrypt = require("bcrypt");



const User = db.define('User', {
  full_name: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.INTEGER
  },
  shipping_adress: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  }
})

export default User;