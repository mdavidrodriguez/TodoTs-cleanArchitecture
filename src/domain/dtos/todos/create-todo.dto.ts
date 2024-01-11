export class CreatedTodoDto {
  private constructor(public readonly text: string) {}

  static create(props: { [key: string]: any }): [string?, CreatedTodoDto?] {
    const { text } = props;
    if (!text) return ["Text property is required", undefined];
    return [undefined, new CreatedTodoDto(text)];
  }
}
