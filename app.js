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
const {
  User,
  Teacher,
  AvailableSlot,
  Student,
  Homework,
  HomeworkSubmission,
  Meeting,
  MeetingParticipant,
  Fee,
  FeePayment,
  Parent,
  ParentStudent,
  Admin,
} = initializeModels(sequelize);

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

async function seedFeePayments() {
  const feePayments = [
    {
      feeId: "37aa3f82-12e4-4a8e-8e90-a6c5efcfd412", // Fee record for Bob Smith
      paymentDate: new Date("2026-07-10"),
      amount: 3000,
      method: "cash",
      receiptNumber: "RCPT001",
    },
    {
      feeId: "37aa3f82-12e4-4a8e-8e90-a6c5efcfd412", // same fee record
      paymentDate: new Date("2026-07-15"),
      amount: 2000,
      method: "online",
      receiptNumber: "RCPT002",
    },
    {
      feeId: "a13d98c0-5d2f-46d5-8305-4a8f103f3c86", // Fee record for Mary Doe
      paymentDate: new Date("2026-07-12"),
      amount: 30000,
      method: "bank_transfer",
      receiptNumber: "RCPT003",
    },
  ];

  await FeePayment.bulkCreate(feePayments);
  console.log("Fee payments seeded successfully!");
}

seedFeePayments();

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
