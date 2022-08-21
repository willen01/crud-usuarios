import { DataTypes } from 'sequelize/types'
import { db } from "../db";

export const Usermodel = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false, //não queremos que entre um valor null.
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    idade: {
        type: DataTypes.INTEGER
    }
})//'user' é o nome da tabela no banco