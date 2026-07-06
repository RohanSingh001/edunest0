module.exports = (sequelize) => {
  const AvailableSlot = sequelize.define("AvailableSlot", {
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
    },
    day: {
      type: DataTypes.ENUM("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
      allowNull: false,
    },
    startTime: {
      type: DataTypes.STRING, // "14:00"
      allowNull: false,
    },
    endTime: {
      type: DataTypes.STRING, // "14:30"
      allowNull: false,
    },
    isBooked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName: "available_slots",
    freezeTableName: true,
    timestamps: true,
  });

  return AvailableSlot;
};
