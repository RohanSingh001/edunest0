const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Student = sequelize.define(
    "Student",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      rollNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
      grade: { type: DataTypes.STRING, allowNull: false }, // e.g. "5th", "10th"
      section: { type: DataTypes.STRING, allowNull: true }, // e.g. "A", "B"
      admissionDate: { type: DataTypes.DATE, allowNull: false },
      guardianName: { type: DataTypes.STRING, allowNull: false },
      guardianContact: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: true },
      status: {
        type: DataTypes.ENUM("active", "graduated", "transferred", "suspended"),
        defaultValue: "active",
      },
    },
    {
      tableName: "students",
      freezeTableName: true,
      timestamps: true,
    },
  );
  return Student;
};
