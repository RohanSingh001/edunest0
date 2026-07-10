const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Parent = sequelize.define(
    "Parent",
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
      occupation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contactNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "parents",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return Parent;
};
