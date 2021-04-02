'use strict';
const { Model } = require('sequelize');
const {isAfter} = require('date-fns');
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  CreditCard.init(
    {
      holder: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      cardNumber: {
        field: 'card_number',
        type: DataTypes.TEXT,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isCreditCard: true
        }
      },
      ccv: { 
        type: DataTypes.DECIMAL(3, 0),
        notNull: true,
        notEmpty: true,
        isInt: true,
        len:[3] 
      },
      expirationDate: {
        field: 'expiration_date',
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true
          
        }
      },
      emitter: {
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: 'CreditCard',
      tableName: 'credit_cards',
      underscored: true
    }
  );
  return CreditCard;
};
