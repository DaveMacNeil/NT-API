import { EntityTarget, FindManyOptions, Repository } from "typeorm";
import { AppDataSource } from "../db";
import { ApiModel } from '../models';

export class BaseService
{
    private repo : Repository<ApiModel>;

    /**
     * Creates an instance of BaseService.
     * @param {EntityTarget<ApiModel>} entity
     * @memberof BaseService
     */
    public constructor(entity: EntityTarget<ApiModel>) {
        this.repo = AppDataSource.getRepository(entity);
    }

    /**
     * @param entity
     * @returns Promise<ApiModel>
     */
    async save(entity: ApiModel): Promise<ApiModel> {
        return this.repo.save(entity);
    }

    /**
     * @param {string} uuid
     * @param {ApiModel} body
     * @return {*}  {(Promise<ApiModel | null>)}
     * @memberof BaseService
     */
    async update(uuid: string, body: ApiModel | null): Promise<ApiModel | null> {
        const entity = await this.getById(uuid);

        if (entity && body) {
            return await this.save(body);
        }

        return null;
    }

    /**
     * @param {ApiModel} entity
     * @return {*}  {Promise<void>}
     * @memberof BaseService
     */
    async delete(entity: ApiModel): Promise<void> {
        await this.repo.delete(entity);
    }

    /**
     * @param {string} uuid
     * @return {*}  {Promise<void>}
     * @memberof BaseService
     */
    async deleteById(uuid: string): Promise<void> {
        const entity = await this.getById(uuid);

        if (entity) {
            await this.delete(entity);
        }
    }

   /**
    * @param {ApiModel} entity
    * @return {*}  {Promise<void>}
    * @memberof BaseService
    */
   async softDelete(entity: ApiModel): Promise<void> {
        await this.repo.softDelete(entity);
    }

    /**
     * @param {string} uuid
     * @return {*}  {Promise<void>}
     * @memberof BaseService
     */
    async softDeleteById(uuid: string): Promise<void> {
        const entity = await this.getById(uuid);

        if (entity) {
            await this.softDelete(entity);
        }
    }

    /**
     * @param uuid 
     * @returns 
     */
    async getById(uuid: string): Promise<ApiModel | null> {
        return await this.repo.findOneBy({ id: uuid });
    }

    /**
     * @param {(FindManyOptions<ApiModel> | undefined)} [options]
     * @return Promise<ApiModel[]> 
     * @memberof BaseService
     */
    async find(options?: FindManyOptions<ApiModel> | undefined): Promise<ApiModel[]> {
        return await this.repo.find(options);
    }

    /**
     * @param {(FindManyOptions<ApiModel> | undefined)} [options]
     * @return {*}  {Promise<number>}
     * @memberof BaseService
     */
    async count(options?: FindManyOptions<ApiModel> | undefined): Promise<number> {
        return await this.repo.count(options);
    }
}