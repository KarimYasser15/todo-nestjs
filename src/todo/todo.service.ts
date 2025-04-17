import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from 'src/database/schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>){}

    private readonly todos : CreateTodoDto[] = [];

    createTodo(todo: CreateTodoDto){
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    } 


}
