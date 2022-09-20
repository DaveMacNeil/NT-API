import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity()
export class User {
    /**
     * @param email 
     * @param firstName 
     * @param lastName 
     */
    constructor(email: string, firstName: string, lastName: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    email!: string;

    @Column({nullable: true})
    firstName!: string

    @Column({nullable: true})
    lastName!: string

    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    updatedDate!: Date;

    @DeleteDateColumn()
    deletedDate!: Date;
}
