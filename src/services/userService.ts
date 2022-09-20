import { User } from "../models";
import { BaseService } from "./baseService";

export class UserService extends BaseService
{
    /**
     * Creates an instance of UserService.
     * @memberof UserService
     */
    constructor() {
        super(User);
    }
}