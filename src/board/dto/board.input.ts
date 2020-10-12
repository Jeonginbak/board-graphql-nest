import { PartialType, InputType } from '@nestjs/graphql';
import { BoardDto } from './board.dto';

@InputType()
export class BoardInput extends PartialType(BoardDto, InputType){
}