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
const { User, Teacher, AvailableSlot, Student } = initializeModels(sequelize);

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

// Add user in database
// async function seedUsers() {
//   const users = [
//     {
//       name: "Blu Josen",
//       email: "blue.teacher@example.com",
//       password: await bcrypt.hash("BluPass123", 10),
//       role: "teacher",
//     },
//     {
//       name: "don Smith",
//       email: "don.student@example.com",
//       password: await bcrypt.hash("DonPass789", 10),
//       role: "student",
//     },
//   ];

//   await User.bulkCreate(users);
//   console.log("Users seeded successfully!");
// }

// seedUsers();

// add student or teacher in database
// async function seedStudentAndTeacher() {
//   const teachers = [
//     {
//       userId: "8997b32c-d8d2-4ca2-9c43-a039d29c84d7", // Alice Johnson from your User seed
//       employeeId: "EMP001",
//       qualification: "M.Sc. Mathematics",
//       subjects: "Mathematics, Physics",
//       classes: "10A, 11B",
//       joiningDate: new Date("2020-07-01"),
//       bio: "Passionate about teaching mathematics and science with 10 years of experience.",
//     },
//     {
//       userId: "cd11c7da-fdde-4c46-a558-9ab1decb80d7", // another teacher user you add
//       employeeId: "EMP002",
//       qualification: "B.Ed. English",
//       subjects: "English, History",
//       classes: "8A, 9C",
//       joiningDate: new Date("2021-06-15"),
//       bio: "Dedicated to improving students' language and communication skills.",
//     },
//   ];
//   // await Teacher.bulkCreate(teachers);

//   const students = [
//     {
//       userId: "0683f8b1-8f6e-44e7-a55b-f98fa42d3045", // Bob Smith from your User seed
//       rollNumber: "R001",
//       grade: "5th",
//       section: "A",
//       admissionDate: new Date("2022-04-10"),
//       guardianName: "John Smith",
//       guardianContact: "9876543210",
//       address: "123 Green Street, Ghaziabad",
//       status: "active",
//     },
//     {
//       userId: "4b9a149f-b475-4c69-9287-003d907d8a32", // another student user you add
//       rollNumber: "R002",
//       grade: "10th",
//       section: "B",
//       admissionDate: new Date("2021-03-20"),
//       guardianName: "Mary Doe",
//       guardianContact: "9123456789",
//       address: "456 Blue Avenue, Ghaziabad",
//       status: "active",
//     },
//   ];
//   await Teacher.bulkCreate(teachers);
//   await Student.bulkCreate(students);

//   console.log("Teacher and student data seeded successfully!");
// }

// seedStudentAndTeacher();

main().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
