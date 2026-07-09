const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Fee = sequelize.define(
    "Fee",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      academicYear: {
        type: DataTypes.STRING, // e.g. "2026-2027"
        allowNull: false,
      },
      term: {
        type: DataTypes.ENUM("Term1", "Term2", "Term3", "Annual"),
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      amountPaid: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "partial", "paid", "overdue"),
        defaultValue: "pending",
      },
    },
    {
      tableName: "fees",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return Fee;
};
