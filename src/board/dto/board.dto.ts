import { Field, ObjectType, ID, GraphQLTimestamp } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString, MaxLength } from 'class-validator';
import { TimeoutErrorCtor } from 'rxjs/internal/util/TimeoutError';
import { Timestamp } from 'typeorm';

@ObjectType()
export class BoardDto {
    @Field(() => ID)
    @IsNumber()

    readonly id: number;

    @Field()
    @IsString()
    @MaxLength(10)
    readonly writer: string;

    @Field()
    @IsString()
    @MaxLength(100)    
    readonly title: string;

    @Field()
    @IsString()
    @MaxLength(1000)       
    readonly text: string;

    @Field(() => GraphQLTimestamp)
    @IsDate()
    readonly date: Timestamp;

    @Field(() => GraphQLTimestamp)
    @IsDate()
    readonly update: Timestamp;
}