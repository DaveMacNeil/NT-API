import { Module } from '@nestjs/common';
import { UserController } from './userController';

@Module({
    controllers: [UserController]
})

export class ControllerModule {};
