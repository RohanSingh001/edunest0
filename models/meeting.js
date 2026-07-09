const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Meeting = sequelize.define(
    "Meeting",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      organizerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users", // could be teacher/admin user
          key: "id",
        },
        onDelete: "CASCADE",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.STRING, // "10:00"
        allowNull: false,
      },
      endTime: {
        type: DataTypes.STRING, // "11:00"
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM(
          "parent-teacher",
          "teacher-student",
          "staff",
          "admin",
        ),
        defaultValue: "parent-teacher",
      },
      status: {
        type: DataTypes.ENUM("scheduled", "completed", "cancelled"),
        defaultValue: "scheduled",
      },
    },
    {
      tableName: "meetings",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return Meeting;
};
