import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Timestamp } from 'typeorm';
import { ObjectType, Field, ID, GraphQLTimestamp } from '@nestjs/graphql'

@Entity("board")
@ObjectType("board")
export class BoardEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)    
    @Column({ type: "varchar", length: 10 })
    writer: string;

    @Field(() => String)
    @Column({ type: "varchar", length: 100 })
    title: string;

    @Field(() => String)
    @Column({ type: "varchar", length: 1000 })
    text: string;

    @Field(() => GraphQLTimestamp)
    @CreateDateColumn()
    date: Timestamp

    @Field(() => GraphQLTimestamp)
    @UpdateDateColumn()
    update: Timestamp
}