import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString, MaxLength } from 'class-validator';

@ObjectType()
export class BoardDto {
    @Field(() => ID)
    @IsNumber()
    readonly id?: number;

    @Field()
    @IsString()
    @MaxLength(10)
    readonly writer?: string;

    @Field()
    @IsString()
    @MaxLength(100)    
    readonly title?: string;

    @Field()
    @IsString()
    @MaxLength(1000)       
    readonly text?: string;

    @Field()
    @IsDate()
    readonly date?: Date;

    @Field()
    @IsDate()
    readonly update?: Date;
}