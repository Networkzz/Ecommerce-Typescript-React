import { DataTypes } from "sequelize";
import db from "../db/connection";

const Order = db.define("order", {
  status: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  shipping_adress: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.STRING,
  },
});

export default Order;
