import { Sequelize } from "sequelize";


//Defining connection to databse { db.name, user, password, host type and dialect}
const db = new Sequelize('ecommerce','root', 'Locker123', {
  host: 'localhost',
  dialect: 'mysql',
  //logging: false,  each command that impact to the database is shown in the console
});

export default db;