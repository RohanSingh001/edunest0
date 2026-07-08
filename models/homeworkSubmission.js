const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const HomeworkSubmission = sequelize.define(
    "HomeworkSubmission",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      homeworkId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "homeworks",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      studentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "students",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      submissionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      fileUrl: {
        type: DataTypes.STRING, // link to uploaded homework file
        allowNull: true,
      },
      grade: {
        type: DataTypes.STRING, // e.g. "A", "B+", "Excellent"
        allowNull: true,
      },
    },

    {
      tableName: "homework_submissions",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return HomeworkSubmission;
};
