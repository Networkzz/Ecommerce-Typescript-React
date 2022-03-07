import { DataTypes } from "sequelize";
import db from "../db/connection";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
bcrypt.hash(myPlaintextPassword, saltRounds, function(err: any, hash: any) {
  // Store hash in your password DB.
});


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