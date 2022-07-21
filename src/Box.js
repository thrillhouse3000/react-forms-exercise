import './Box.css'

const Box = ({id, color, width, height, removeBox}) => {
    return (
        <div 
            className='Box'
            style={{backgroundColor: color, width: `${width}rem`, height: `${height}rem`}}
        >
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    )
}

export default Box;