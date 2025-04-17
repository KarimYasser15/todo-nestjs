import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todo.service';
import mongoose from 'mongoose';
import { updateTodoDto } from './dtos/update-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post()
    @UsePipes(new ValidationPipe())
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
        if(!isValid) throw new HttpException('Invalid ID', 404);
        const todo =  await this.todoService.getTodoById(id);
        if(!todo)
        {
            throw new HttpException('Todo not found', 404);
        }
        return todo;
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateTodo(@Param('id') id: string,  @Body() updateTodoDto: updateTodoDto)
    {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('Invalid ID', 404);
        const updatedTodo = await this.todoService.updateTodo(id, updateTodoDto);
        if(!updatedTodo)
        {
            throw new HttpException('Todo not found', 404);

        }
        return updatedTodo;
    }



}
