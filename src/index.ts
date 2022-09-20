import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppDataSource } from './db';
import { AppModule } from './app.module';

dotenv.config();

async function start() {
    AppDataSource.initialize().then(async () => {
        console.log('Connected to Database');
    }).catch(error => console.log(error))

    const port: string|number = process.env.PORT ?? 8000;
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
}

start();
