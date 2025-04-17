import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(
    {isGlobal: true}
  ),
  MongooseModule.forRoot( "mongodb+srv://karimyasser:karimyasser@todo.5z7j0ia.mongodb.net/?retryWrites=true&w=majority&appName=todo"
),
  TodoModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
