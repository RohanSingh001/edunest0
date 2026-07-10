const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "users", // table name from your User model
          key: "id",
        },
        onDelete: "CASCADE",
      },
      employeeId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      designation: {
        type: DataTypes.STRING, // e.g. "Principal", "Vice Principal"
        allowNull: false,
      },
      contactNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      joiningDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "admins",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return Admin;
};
