import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Todo{
    @Prop({required : true})
    title: string;

    @Prop({required : true})
    description: string;
}

export const todoSchema = SchemaFactory.createForClass(Todo);