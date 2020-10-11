import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { BoardEntity } from './board.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BoardEntity])],
    providers: [BoardResolver, BoardService],
})
export class BoardModule {}
