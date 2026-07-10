const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ParentStudent = sequelize.define(
    "ParentStudent",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      parentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "parents",
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
    },
    {
      tableName: "parent_students",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return ParentStudent;
};
