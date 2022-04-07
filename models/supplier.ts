import { DataTypes } from "sequelize";
import db from "../db/connection";

const Supplier = db.define("suppliers", {
  name: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.INTEGER,
  },
});

export default Supplier;
