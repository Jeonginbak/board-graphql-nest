import { HttpException, NotFoundException } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, ID } from '@nestjs/graphql';
import { UpdateResult } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardService } from './board.service';
import { BoardDto } from './dto/board.dto';
import { BoardInput } from './dto/board.input';
import { UserInputError } from 'apollo-server-express';


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
    async update(@Args('id') id: number, @Args('data') data: BoardInput): Promise<BoardInput> {
        return this.boardService.update(id, data)
    }

    @Mutation(() => Boolean)
    async delete(@Args('id') id:number): Promise<Boolean>{
        console.log(id)
        if (id) {
            this.boardService.delete(id)
            return true
        } else {
            throw new NotFoundException('Do Not Exists ID')
        }

    }
}
