const mysql = require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./models/user");

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

const User = UserModel(sequelize, DataTypes);

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

  // try {
  //   await User.create({ name: "Rohan", email: "rohan@example.com" });
  //   console.log("Sample user created");
  // } catch (error) {
  //   console.error("Failed to create user:", error);
  // }
}

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
