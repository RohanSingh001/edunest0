// This file is used to initialize and export all models with relationships
// Import models
const UserModel = require("./user");
const TeacherModel = require("./teacher");
const AvailableSlotModel = require("./availableSlot");
const StudentModel = require("./student");

// Initialize models (call this function from app.js after creating sequelize instance)
function initializeModels(sequelize) {
  const User = UserModel(sequelize);
  const Teacher = TeacherModel(sequelize);
  const AvailableSlot = AvailableSlotModel(sequelize);
  const Student = StudentModel(sequelize);

  // Define relationships
  User.hasOne(Teacher, { foreignKey: "userId" });
  Teacher.belongsTo(User, { foreignKey: "userId" });

  Teacher.hasMany(AvailableSlot, { foreignKey: "teacherId" });
  AvailableSlot.belongsTo(Teacher, { foreignKey: "teacherId" });

  User.hasOne(Student, { foreignKey: "userId" });
  Student.belongsTo(User, { foreignKey: "userId" });

  return { User, Teacher, AvailableSlot, Student };
}

module.exports = { initializeModels };
