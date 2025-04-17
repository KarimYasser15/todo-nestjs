import { IsOptional, IsString } from "class-validator";

export class updateTodoDto
{
    @IsString()
    @IsOptional()
    title? : string;
    
    @IsString()
    @IsOptional()
    description? : string;
}