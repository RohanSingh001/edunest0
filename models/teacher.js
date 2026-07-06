const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Teacher = sequelize.define("Teacher", {
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
    },
    employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subjects: {
      type: DataTypes.STRING, // could be JSON if multiple subjects
      allowNull: true,
    },
    classes: {
      type: DataTypes.STRING, // e.g. "10A, 11B"
      allowNull: true,
    },
    joiningDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: "teachers",
    freezeTableName: true,
    timestamps: true,
  });

  return Teacher;
};
