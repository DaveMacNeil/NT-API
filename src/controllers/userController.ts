import { Controller } from '@nestjs/common';
import { UserService } from '../services/userService';
import { BaseController } from './baseController';

@Controller('User')
export class UserController extends BaseController
{
    /**
     * Creates an instance of UserController.
     * @memberof UserController
     */
    constructor() {
        super(new UserService());
    }
}