import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BoardEntity } from './board/board.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "jeongin",
      "password": "1234",
      "database": "nest",
      "entities": [BoardEntity],
      "synchronize": true
    }), 
    BoardModule,
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        dateScalarMode: 'timestamp'
      }
    })
  ]
})
export class AppModule {
    constructor(private connection: Connection) {}
}

