const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Homework = sequelize.define(
    "Homework",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      teacherId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "teachers",
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
      subject: {
        type: DataTypes.STRING,
        allowNull: false, // e.g. "Mathematics"
      },
      grade: {
        type: DataTypes.STRING,
        allowNull: false, // e.g. "5th"
      },
      section: {
        type: DataTypes.STRING,
        allowNull: true, // e.g. "A"
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("assigned", "submitted", "graded"),
        defaultValue: "assigned",
      },
    },
    {
      tableName: "homeworks",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return Homework;
};
