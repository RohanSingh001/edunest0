const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      freezeTableName: true,
      timestamps: true,
    },
  );
};

// User.create({ name: "Rohan", email: "rohan@example.com" });
//  to create a new user in the database.

// create server file
// const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');

// const app = express();
// app.use(express.json());

// // Connect to MySQL
// const sequelize = new Sequelize('demoDB', 'root', 'yourpassword', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Define Model
// const User = sequelize.define('User', {
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, unique: true }
// });

// sequelize.sync();

// // Routes
// app.post('/users', async (req, res) => {
//   const user = await User.create(req.body);
//   res.send(user);
// });

// app.get('/users', async (req, res) => {
//   const users = await User.findAll();
//   res.send(users);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
