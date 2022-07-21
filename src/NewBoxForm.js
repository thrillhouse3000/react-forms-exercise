import {useState} from "react"

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: '',
        width: '',
        height: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (evt) => { 
        evt.preventDefault()
        addBox({...formData})
        setFormData(INITIAL_STATE); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input 
                type='text'
                id='color'
                name='color'
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input 
                type='width'
                id='width'
                name='width'
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input 
                type='height'
                id='height'
                name='height'
                value={formData.height}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;