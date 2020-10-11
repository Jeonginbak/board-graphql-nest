import { InputType, PartialType } from '@nestjs/graphql';
import { BoardDto } from './board.dto';

@InputType()
export class BoardInput extends PartialType(BoardDto, InputType) {

}