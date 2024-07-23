import { DataTypes } from "sequelize";
import db from '../db.js'


const Poster = db.define('posters', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    movie: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(350),
        allowNull: false
    },
    director: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    dirfoto: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    timecode: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(40)
    },
    genre: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
},
{
    timestamps: false
})


export default Poster;