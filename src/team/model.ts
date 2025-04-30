import { DataTypes, Model } from "sequelize";
import { ITeam } from "./interface";
import sequelizeDb from "../config/sequelize";

class Team extends Model<ITeam> implements ITeam {
    public teamId!: number;
    public stadiumFk!: number;
    public teamShortName!: string;
    public teamLongName!: string;
    public sportLeagueShortName!: string;
    public sportLeagueLongName!: string;
    public leagueDivision!: string;
    public divisionName!: string;
    public createdDate!: Date;
    public createdBy!: number;
    public updatedDateTime!: Date;
    public updatedBy!: number;
}

Team.init ({
        teamId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      stadiumFk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tlkpStadium',
          key: 'stadiumId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',     
    },      
      teamShortName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      teamLongName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sportLeagueShortName: {
        type: DataTypes.STRING,
        allowNull: false,
      },           
      sportLeagueLongName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      leagueDivision: {
        type: DataTypes.STRING,
        allowNull: false,
      },           
      divisionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },                       
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',         
      },
      updatedDateTime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',         
      }
    },
    {
        sequelize: sequelizeDb,
        tableName: "tlkpTeam",
        timestamps: false,
      }
)

export default Team;