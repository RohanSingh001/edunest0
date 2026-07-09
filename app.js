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

async function seedmeetingParticipants() {
  const participants = [
    {
      meetingId: "591459aa-833a-4e59-aa4d-035c5112b0f3", // Parent-Teacher Meeting UUID
      userId: "4b9a149f-b475-4c69-9287-003d907d8a32", // Bob Smith (student)
      roleInMeeting: "student",
    },
    {
      meetingId: "fb8ef8e4-2f34-4c31-beb4-6defc884c54a",
      userId: "0683f8b1-8f6e-44e7-a55b-f98fa42d3045", // Parent user
      roleInMeeting: "parent",
    },
  ];

  await MeetingParticipant.bulkCreate(participants);
  console.log("Meeting participants seeded successfully!");
}

seedmeetingParticipants();

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
