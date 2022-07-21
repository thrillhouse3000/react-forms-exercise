import {useState} from 'react'

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value 
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addTodo({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Todo</label>
            <input 
                type='text'
                id='todo'
                name='todo'
                value={formData.todo}
                placeholder='Enter a Todo'
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodoForm;