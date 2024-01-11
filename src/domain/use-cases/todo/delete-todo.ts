import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";

export interface DeeleteTodoUseCase {
  execute(id: number): Promise<TodoEntity>;
}

export class DeleteTodo implements DeeleteTodoUseCase {
  constructor(private readonly respository: TodoRepository) {}
  execute(id: number): Promise<TodoEntity> {
    return this.respository.deleteById(id);
  }
}
