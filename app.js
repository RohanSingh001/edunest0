const mysql = require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const { initializeModels } = require("./models/index");

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "@1#2rohan$%&",
  database: process.env.DB_NAME || "edunest0",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    process.exit(1);
  }

  console.log("Connected to MySQL!");
});

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
    logging: false,
  },
);

// Initialize all models with relationships
const { User, Teacher, AvailableSlot } = initializeModels(sequelize);

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected successfully!");

    await sequelize.sync({ alter: true });
    console.log("Database & tables created!");
  } catch (error) {
    console.error("Database initialization failed:", error);
    process.exit(1);
  }
}

async function main() {
  await initializeDatabase();
}

// async function seedUsers() {
//   const users = [
//     {
//       id: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
//       name: "Alice Johnson",
//       email: "alice.teacher@example.com",
//       password: await bcrypt.hash("AlicePass123", 10),
//       role: "teacher",
//     },
//     {
//       id: "b2c3d4e5-f6a7-8901-bcde-2345678901bc",
//       name: "Bob Smith",
//       email: "bob.student@example.com",
//       password: await bcrypt.hash("BobPass456", 10),
//       role: "student",
//     },
//   ];

//   await User.bulkCreate(users);
//   console.log("Users seeded successfully!");
// }

// seedUsers();

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
