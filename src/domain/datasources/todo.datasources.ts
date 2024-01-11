import { CreatedTodoDto, UpdateTodoDto } from "../dtos";
import { TodoEntity } from "../entities/todo.entity";

export abstract class TodoDatasource {
  abstract create(createTodoDto: CreatedTodoDto): Promise<TodoEntity>;
  //   Todo paginación
  abstract getAll(): Promise<TodoEntity[]>;

  abstract findById(id: number): Promise<TodoEntity | undefined>;

  abstract updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity>;

  abstract deleteById(id: number): Promise<TodoEntity>;
}
