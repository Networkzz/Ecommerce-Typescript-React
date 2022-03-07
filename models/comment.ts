import { DataTypes } from "sequelize";
import db from "../db/connection";

const Comment = db.define('Comments', {
  content: {
    type: DataTypes.STRING
  },
  product_id: {
    type: DataTypes.INTEGER
  }
})

export default Comment;