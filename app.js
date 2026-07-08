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
const { User, Teacher, AvailableSlot, Student, Homework, HomeworkSubmission } =
  initializeModels(sequelize);

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
  // Run seeding after DB is ready
  // await seedAll();
}

// Combined seeding: create users first, then teacher/student and homework
// async function seedAll() {
//   try {
//     // Create users (use findOrCreate to be idempotent)
//     const [teacherUser] = await User.findOrCreate({
//       where: { email: "blue.teacher@example.com" },
//       defaults: {
//         name: "Blu Josen",
//         email: "blue.teacher@example.com",
//         password: "BluPass123",
//         role: "teacher",
//       },
//     });

//     const [studentUser] = await User.findOrCreate({
//       where: { email: "don.student@example.com" },
//       defaults: {
//         name: "Don Smith",
//         email: "don.student@example.com",
//         password: "DonPass789",
//         role: "student",
//       },
//     });

//     // Create teacher linked to teacherUser
//     const [teacher] = await Teacher.findOrCreate({
//       where: { userId: teacherUser.id },
//       defaults: {
//         userId: teacherUser.id,
//         employeeId: "EMP001",
//         qualification: "M.Sc. Mathematics",
//         subjects: "Mathematics, Physics",
//         classes: "10A, 11B",
//         joiningDate: new Date("2020-07-01"),
//         bio: "Passionate about teaching mathematics and science.",
//       },
//     });

//     // Create student linked to studentUser
//     const [student] = await Student.findOrCreate({
//       where: { userId: studentUser.id },
//       defaults: {
//         userId: studentUser.id,
//         rollNumber: "R001",
//         grade: "5th",
//         section: "A",
//         admissionDate: new Date("2022-04-10"),
//         guardianName: "John Smith",
//         guardianContact: "9876543210",
//         address: "123 Green Street, Ghaziabad",
//         status: "active",
//       },
//     });

//     // Create an available slot for the teacher
//     await AvailableSlot.findOrCreate({
//       where: { teacherId: teacher.id, day: "Monday", startTime: "09:00" },
//       defaults: {
//         teacherId: teacher.id,
//         day: "Monday",
//         startTime: "09:00",
//         endTime: "09:30",
//         isBooked: false,
//       },
//     });

//     // Create homework linked to the teacher (use teacher.id)
//     await Homework.findOrCreate({
//       where: { title: "Math Practice Worksheet", teacherId: teacher.id },
//       defaults: {
//         teacherId: teacher.id,
//         title: "Math Practice Worksheet",
//         description: "Complete exercises 1–10 from Chapter 3 (Fractions).",
//         subject: "Mathematics",
//         grade: "5th",
//         section: "A",
//         dueDate: new Date("2026-07-15"),
//         status: "assigned",
//       },
//     });

//     console.log("Seeding complete.");
//   } catch (err) {
//     console.error("Seeding failed:", err);
//   }
// }

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
