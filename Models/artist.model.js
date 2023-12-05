import sequelize from '../config/db.sequelize.js';
import { DataTypes, Model } from 'sequelize';


class Artist extends Model { };

Artist.init({
    // Objekt med felter
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'artist', // Modellens navn
    underscored: true, // Brug underscores istedet for standarden CamelCase
    freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
    createdAt: false, // Udelad createdAt felt
    updatedAt: false, // Udelad updateddAt felt
    timestamps: false // Undgå både createdAt og updatedAt felter
  });

  export default Artist