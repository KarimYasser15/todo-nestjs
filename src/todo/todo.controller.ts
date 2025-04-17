import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todo.service';
import mongoose from 'mongoose';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto){
        await this.todoService.createTodo(createTodoDto);
    }

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Get(':id')
    async getTodoById(@Param('id') id : string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User not found', 404);
        const todo =  await this.todoService.getTodoById(id);
        if(!todo)
        {
            throw new HttpException('User not found', 404);
        }
        return todo;
    }

}
