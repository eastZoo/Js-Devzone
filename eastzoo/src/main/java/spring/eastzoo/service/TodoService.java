package spring.eastzoo.service;

import org.springframework.stereotype.Service;
import spring.eastzoo.repository.Todo;
import spring.eastzoo.repository.TodoRepository;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public void getTodos() {
        todoRepository.findAll();
    }

    public void insertTodo(String todoName){
        todoRepository.save(todoName);
    }
}
