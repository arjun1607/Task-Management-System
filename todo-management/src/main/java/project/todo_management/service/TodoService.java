package project.todo_management.service;

import project.todo_management.dto.TodoDto;
import java.util.List;

public interface TodoService {
    TodoDto updateTodo(TodoDto todoDto, Long id);

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id);

    List<TodoDto> getAllTodos();

    void deleteTodo(Long id);

    TodoDto completeTodo(Long id);

    TodoDto inCompleteTodo(Long id);
}
