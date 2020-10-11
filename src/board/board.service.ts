import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardDto } from './dto/board.dto';
import { BoardInput } from './dto/board.input';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private readonly boardRepository: Repository<BoardEntity>) {}

    //게시글 생성
    async create(boardInput:BoardInput): Promise<BoardEntity> {
        const board = new BoardEntity();
        board.writer = boardInput.writer;
        board.title = boardInput.title;
        board.text = boardInput.text;
        board.date = boardInput.date;       
        return await this.boardRepository.save(board)
    }

    //게시글 조회
    async readAll(): Promise<BoardEntity[]> {
        return await this.boardRepository.find();
    }

    //특정 작성자 게시글 조회
    async readWriter(writer: string): Promise<BoardEntity[]> {
        return await this.boardRepository.find({ writer: writer });
    }

    async update(id: number, update:BoardInput): Promise<void>{
       await this.boardRepository.update(id, {...update})
    }

    async delete(id: number): Promise<void>{
       await this.boardRepository.delete(id);
    }
}
