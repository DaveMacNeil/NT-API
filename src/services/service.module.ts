import { Module } from '@nestjs/common';
import { UserService } from './userService';

@Module({
    providers: [UserService]
})

export class ServiceModule {};