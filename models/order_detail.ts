import { DataTypes } from "sequelize";
import db from "../db/connection";

const Order_detail = db.define('Order_details', {
  price: {
    type: DataTypes.DOUBLE
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  order_id: {
    type: DataTypes.INTEGER
  },
  product_id: {
    type: DataTypes.INTEGER
  }
})

export default Order_detail;