import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsString, IsNumber, IsDate } from 'class-validator';

@ObjectType()
export class BoardDto {
    @Field(() => ID)
    @IsNumber()
    readonly id: number;
 
    @Field()
    @IsString()
    readonly writer: string;

    @Field()
    @IsString()    
    readonly title: string;

    @Field()  
    @IsString()     
    readonly text: string;

    @Field()
    @IsDate()    
    readonly date: Date;

    @Field()
    @IsDate()    
    readonly update: Date;
}
