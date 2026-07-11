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

async function seedHomeworkSubmissions() {
  const submissions = [
    {
      homeworkId: "6d9fcb3e-6a54-4902-b76c-e82483efb4a6", // Math homework UUID
      studentId: "0069f941-187a-488d-bcfc-d6b2cc08c97a", // Bob Smith studentId
      submissionDate: new Date("2026-07-14"),
      fileUrl: "https://school-system.com/uploads/homework/bob_math.pdf",
      grade: "A",
    },
    {
      homeworkId: "6d9fcb3e-6a54-4902-b76c-e82483efb4a6", // Math homework UUID
      studentId: "651aff43-b793-4813-a80c-7621ee4d84da", // Mary Doe studentId
      submissionDate: new Date("2026-07-15"),
      fileUrl: "https://school-system.com/uploads/homework/mary_math.pdf",
      grade: "B+",
    },
  ];

  await HomeworkSubmission.bulkCreate(submissions);
  console.log("Homework submissions seeded successfully!");
}

seedHomeworkSubmissions();

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
