import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./models"

export const AppDataSource = new DataSource({
    url: process.env.DATABASE_URL,
    type: "postgres",
    synchronize: true,
    logging: !!process.env.DATABASE_LOGGING,
    entities: [User],
    migrations: ['./migrations'],
    subscribers: ['./hooks'],
})