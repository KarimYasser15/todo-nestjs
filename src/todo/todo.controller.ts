import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto){
        await this.todoService.createTodo(createTodoDto);
    }


}
