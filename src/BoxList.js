import {useState} from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import {v4 as uuid} from "uuid"
import './BoxList.css'

const BoxList = () => {
    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }

    const removeBox = (id) => {
        setBoxes(boxes.filter(b => b.id !== id))
    }

    return (
        <div className='BoxList'>
            <h2>Color Box Maker</h2>
            <NewBoxForm addBox={addBox} />
            <div className='BoxList-container'>
                {boxes.map(b => 
                    <Box key={b.id} id={b.id} color={b.color} width={b.width} height={b.height} removeBox={removeBox}
                />)}
            </div>
        </div>
    )
}

export default BoxList;