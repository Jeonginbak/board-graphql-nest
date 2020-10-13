import { HttpException, NotFoundException } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { BoardDto } from './dto/board.dto';
import { BoardInput } from './dto/board.input';



@Resolver('Board')
export class BoardResolver {
    constructor(private readonly boardService: BoardService) {}
    
    @Query(() => [ BoardDto ])
    async readWriter(@Args('writer') writer:string): Promise<BoardDto[]> {
        return this.boardService.readWriter(writer);
    }

    @Query(() => [ BoardDto ])
    async readAll(): Promise<BoardDto[]> {
        return this.boardService.readAll();
    }

    @Mutation(() => BoardDto)
    async create(@Args('data') data: BoardInput): Promise<BoardInput> {
        return this.boardService.create(data)
    }

    @Mutation(() => BoardDto, { nullable : true })
    async update(
    @Args('id',{type: ()=> ID},) id: number,
    @Args('title') title: string,
    @Args('text') text: string): Promise<void> {
        const updateField = { title, text }
        await this.boardService.update(id, updateField)
    }

    @Mutation(() => BoardDto, { nullable : true })
    async delete(@Args('id', {type: () => ID}) id:number): Promise<void>{
        await this.boardService.delete(id);
    }
}
