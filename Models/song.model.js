import sequelize from '../config/db.sequelize.js';
import { DataTypes, Model } from 'sequelize';
import Artist from './artist.model.js';


class Song extends Model { };

Song.init({
    // Objekt med felter
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:  {
          model: Artist
        }
      }
  }, {
    sequelize,
    modelName: 'song', // Modellens navn
    underscored: true, // Brug underscores istedet for standarden CamelCase
    freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
    createdAt: false, // Udelad createdAt felt
    updatedAt: false, // Udelad updateddAt felt
    timestamps: false // Undgå både createdAt og updatedAt felter
  });

  Song.belongsTo(Artist, {
    foreignKey: 'artist_id',
    as: 'artist', // alias for the association
  });
  

  export default Song