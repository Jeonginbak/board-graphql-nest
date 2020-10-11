import { HttpException } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { UpdateResult } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardService } from './board.service';
import { BoardDto } from './dto/board.dto';
import { BoardInput } from './dto/board.input';


@Resolver('Board')
export class BoardResolver {
    constructor(private readonly boardService: BoardService) {}
    
    @Query(() => [ BoardDto ])
    async readWriter(@Args('writer') writer:string): Promise<BoardEntity[]> {
        return await this.boardService.readWriter(writer);
    }

    @Query(() => [ BoardDto ])
    async readAll(): Promise<BoardEntity[]> {
        return await this.boardService.readAll();
    }

    @Mutation(() => BoardDto)
    async create(@Args('data') data: BoardInput): Promise<BoardInput> {
        return await this.boardService.create(data)
    }

    @Mutation(() => BoardDto)
    async update(@Args('id', {type: () => ID}) id: number, @Args('data') data: BoardInput): Promise<void> {
        await this.boardService.update(id, data)
    }

    @Mutation(() => BoardDto)
    async delete(@Args('id', {type: () => ID}) id:number): Promise<void>{
        await this.boardService.delete(id)
    }
}
