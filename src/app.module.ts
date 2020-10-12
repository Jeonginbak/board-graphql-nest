import { Module, Inject, Scope, Catch } from '@nestjs/common';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { BoardEntity } from './board/board.entity';
import { GraphQLModule, GqlExceptionFilter, Query, Resolver } from '@nestjs/graphql';
import { BoardModule } from './board/board.module';
import { NestFactory, REQUEST } from '@nestjs/core';

@Resolver('App')
export class AppResolver {
  constructor(
    @Inject('REQUEST_SCOPED_PROVIDER')
    private readonly requestScopedProvider
  ) {}
  @Query(() => Boolean)
  public test(): Boolean {
    return true;
  }
}

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
  ],
  providers: [
    {
      provide: 'REQUEST_SCOPED_PROVIDER',
      scope: Scope.REQUEST,
      inject: [REQUEST],
      useFactory: () => {
        console.log('Request Scoped Provider - useFactory');
        throw new CustomException()
      },
    },
    AppResolver
  ]
})
export class AppModule {
    constructor(private connection: Connection) {}
}

export class CustomException extends Error {}

@Catch(CustomException)
export class CustomExceptionFilter implements GqlExceptionFilter {
   public catch(): any {
     console.log('not being called');
     return new Error('custom error');
   }
}

