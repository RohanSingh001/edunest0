// This file is used to initialize and export all models with relationships
// Import models
const UserModel = require("./user");
const TeacherModel = require("./teacher");
const AvailableSlotModel = require("./availableSlot");
const StudentModel = require("./student");
const HomeworkSubmissionModel = require("./homeworkSubmission");
const HomeworkModel = require("./homework");
const MeetingModel = require("./meeting");
const MeetingParticipantModel = require("./meetingParticipant");
const FeeModel = require("./fee");
const FeePaymentModel = require("./feePayment");
const ParentModel = require("./parent");
const ParentStudentModel = require("./parentStudent");

// Initialize models (call this function from app.js after creating sequelize instance)
function initializeModels(sequelize) {
  const User = UserModel(sequelize);
  const Teacher = TeacherModel(sequelize);
  const AvailableSlot = AvailableSlotModel(sequelize);
  const Student = StudentModel(sequelize);
  const Homework = HomeworkModel(sequelize);
  const HomeworkSubmission = HomeworkSubmissionModel(sequelize);
  const Meeting = MeetingModel(sequelize);
  const MeetingParticipant = MeetingParticipantModel(sequelize);
  const Fee = FeeModel(sequelize);
  const FeePayment = FeePaymentModel(sequelize);
  const Parent = ParentModel(sequelize);
  const ParentStudent = ParentStudentModel(sequelize);

  // Define relationships
  User.hasOne(Teacher, { foreignKey: "userId" });
  Teacher.belongsTo(User, { foreignKey: "userId" });

  Teacher.hasMany(AvailableSlot, { foreignKey: "teacherId" });
  AvailableSlot.belongsTo(Teacher, { foreignKey: "teacherId" });

  User.hasOne(Student, { foreignKey: "userId" });
  Student.belongsTo(User, { foreignKey: "userId" });

  Homework.hasMany(HomeworkSubmission, { foreignKey: "homeworkId" });
  HomeworkSubmission.belongsTo(Homework, { foreignKey: "homeworkId" });

  Student.hasMany(HomeworkSubmission, { foreignKey: "studentId" });
  HomeworkSubmission.belongsTo(Student, { foreignKey: "studentId" });

  Meeting.hasMany(MeetingParticipant, { foreignKey: "meetingId" });
  MeetingParticipant.belongsTo(Meeting, { foreignKey: "meetingId" });

  User.hasMany(MeetingParticipant, { foreignKey: "userId" });
  MeetingParticipant.belongsTo(User, { foreignKey: "userId" });

  Student.hasMany(Fee, { foreignKey: "studentId" });
  Fee.belongsTo(Student, { foreignKey: "studentId" });

  Fee.hasMany(FeePayment, { foreignKey: "feeId" });
  FeePayment.belongsTo(Fee, { foreignKey: "feeId" });

  // User ↔ Parent
  User.hasOne(Parent, { foreignKey: "userId" });
  Parent.belongsTo(User, { foreignKey: "userId" });

  // Parent ↔ Student (many-to-many, since a parent can have multiple children)
  Parent.belongsToMany(Student, {
    through: "ParentStudent",
    foreignKey: "parentId",
  });
  Student.belongsToMany(Parent, {
    through: "ParentStudent",
    foreignKey: "studentId",
  });

  return {
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
  };
}

module.exports = { initializeModels };
