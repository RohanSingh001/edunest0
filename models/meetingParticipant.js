const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const MeetingParticipant = sequelize.define("MeetingParticipant", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    meetingId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "meetings",
        key: "id",
      },
      onDelete: "CASCADE",
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
    roleInMeeting: {
      type: DataTypes.ENUM("teacher", "student", "parent", "admin"),
      allowNull: false,
    },
  });

  return MeetingParticipant;
};
