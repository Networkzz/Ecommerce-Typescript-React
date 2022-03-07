import { DataTypes } from "sequelize";
import db from "../db/connection";

const Product = db.define('Products', {
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DECIMAL
  },
  image: {
    type: DataTypes.BLOB
  },
  stock: {
    type: DataTypes.INTEGER
  }
})

export default Product;