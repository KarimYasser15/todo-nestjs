import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, todoSchema } from 'src/database/schemas/todo.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Todo.name, schema: todoSchema}])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
