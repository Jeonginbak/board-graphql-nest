import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { BoardDto } from './dto/board.dto';
import { BoardInput } from './dto/board.input';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardEntity)
        private readonly boardRepository: Repository<BoardEntity>) {}

    //게시글 생성
    async create(boardInput:BoardInput): Promise<BoardDto> {
        const board = new BoardEntity();
        board.writer = boardInput.writer;
        board.title = boardInput.title;
        board.text = boardInput.text;
        return this.boardRepository.save(board)
    }

    //게시글 조회
    async readAll(): Promise<BoardDto[]> {
        return await this.boardRepository.find();
    }

    //특정 작성자 게시글 조회
    async readWriter(writer: string): Promise<BoardDto[]> {
        return await this.boardRepository.find({ writer: writer });
    }

    // 특정 게시글 업데이트
    async update(id: number, update:BoardInput): Promise<void>{
        await this.boardRepository.update(id, {
            title: update.title,
            text: update.text 
        })
    }
    
    // 게시글 삭제
    async delete(id: number): Promise<void>{
        this.boardRepository.delete(id)
    }
}
