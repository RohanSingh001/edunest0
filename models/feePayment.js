const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const FeePayment = sequelize.define(
    "FeePayment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      feeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "fees",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      paymentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      method: {
        type: DataTypes.ENUM("cash", "card", "bank_transfer", "online"),
        allowNull: false,
      },
      receiptNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
      },
    },
    {
      tableName: "fee_payments",
      freezeTableName: true,
      timestamps: true,
    },
  );

  return FeePayment;
};
