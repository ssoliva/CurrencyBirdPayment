
import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import { Payment } from "../models/Payment.js"

dotenv.config();

export const connection = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [ Payment ]
})

async function connectionDB() {
    try {
        await connection.sync()
    } catch (error) {
        console.log(error)
    }
}

export default connectionDB