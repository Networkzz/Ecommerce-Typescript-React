import { DataTypes } from "sequelize";
import db from "../db/connection";

const Product_supplier = db.define('Products_has_suppliers', {
  product_id: {
    type: DataTypes.INTEGER
  },
  supplier_id: {
    type: DataTypes.INTEGER
  }
})

export default Product_supplier;