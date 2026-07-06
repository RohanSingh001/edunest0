const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

// Import models
const User = require("./User")(sequelize);
const Teacher = require("./Teacher")(sequelize);
const AvailableSlot = require("./AvailableSlot")(sequelize);

// Define relationships
User.hasOne(Teacher, { foreignKey: "userId" });
Teacher.belongsTo(User, { foreignKey: "userId" });

Teacher.hasMany(AvailableSlot, { foreignKey: "teacherId" });
AvailableSlot.belongsTo(Teacher, { foreignKey: "teacherId" });

// Export models + sequelize instance
module.exports = {
  sequelize,
  User,
  Teacher,
  AvailableSlot,
};
