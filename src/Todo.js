import './Todo.css'

const Todo = ({id, todo, removeTodo}) => {
    return (
        <div className='Todo'>
            <span className='Todo-task'>{todo}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
};

export default Todo;