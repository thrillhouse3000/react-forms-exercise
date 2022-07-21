import {useState} from "react"
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import {v4 as uuid} from "uuid"
import './TodoList.css'

const TodoList = () => {
    const INITIAL_STATE = [];
    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <div className='TodoList'>
            <h2>Todo List</h2>
            <NewTodoForm addTodo={addTodo} />
            <div className='TodoList-list'>
                {todos.map(t => <Todo id={t.id} key={t.id} todo={t.todo} removeTodo={removeTodo} />)}
            </div>
        </div>
    )
};

export default TodoList;