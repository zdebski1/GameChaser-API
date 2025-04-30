import { DataTypes, Model } from "sequelize";
import { IStadium } from "./interface";
import sequelizeDb from "../config/sequelize";

class Stadium extends Model<IStadium> implements IStadium {
    public stadiumId!: number;
    public stadiumName!: string;
    public stadiumCity!: string;
    public stadiumState!: string;
    public stadiumLongitude!: string;
    public stadiumLatitude!: string;
    public stadiumAddress!: string;
    public createdDate!: Date;
    public createdBy!: number;
    public updatedDateTime!: Date;
    public updatedBy!: number;
}

Stadium.init ({
      stadiumId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      stadiumName: {
        type: DataTypes.STRING,
        allowNull: false,
    },      
    stadiumCity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stadiumState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stadiumLongitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },           
      stadiumLatitude: {
        type: DataTypes.STRING,
        allowNull: false,
      },      
      stadiumAddress: {
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
        tableName: "tlkpStadium",
        timestamps: false,
      }
)

export default Stadium;