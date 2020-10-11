import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql'

@Entity("board")
@ObjectType("board")
export class BoardEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id?: number;

    @Field(() => String)    
    @Column({ type: "varchar", length: 10 })
    writer?: string;

    @Field(() => String)
    @Column({ type: "varchar", length: 100 })
    title?: string;

    @Field(() => String)
    @Column({ type: "varchar", length: 1000 })
    text?: string;

    @Field(() => Date)
    @CreateDateColumn()
    date?: Date

    @Field(() => Date)
    @UpdateDateColumn()
    update?: Date
}