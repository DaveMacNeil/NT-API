import { Controller, Get, Post, Delete, Req, BadRequestException } from '@nestjs/common';
import { Request } from 'express';
import { ApiModel } from '../models';
import { ApiService } from '../services';

@Controller()
export class BaseController
{
    private service: ApiService;

    /**
     * Creates an instance of UserController.
     * @memberof UserController
     */
    constructor(service: ApiService) {
        this.service = service;
    }

    @Get('all')
    getAll(@Req() request: Request): Promise<ApiModel[]> {
        return this.service.find();
    }

    @Get(':id')
    getById(@Req() request: Request): Promise<ApiModel | null> {
        if (!request.params.id) {
            throw new BadRequestException(); 
        }

        return this.service.getById(request.params.id);
    }

    @Get()
    search(@Req() request: Request): Promise<ApiModel[]> {
        return this.service.find(request.params);
    }

    @Post()
    add(@Req() request: Request): Promise<ApiModel> {
        if (!request.body) {
            throw new BadRequestException();
        }

        const entity: ApiModel = request.body as ApiModel;
        return this.service.save(entity);
    }

    @Post(':id')
    update(@Req() request: Request): Promise<ApiModel | null> {
        if (!request.body || !request.params.id) {
            throw new BadRequestException();
        }

        const entity: ApiModel = request.body as ApiModel;
        return this.service.update(request.params.id, entity);
    }

    @Delete(':id')
    delete(@Req() request: Request): Promise<void> {
        if (!request.params.id) {
            throw new BadRequestException(); 
        }

        return this.service.deleteById(request.params.id);
    }
}