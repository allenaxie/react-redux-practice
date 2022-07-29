import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const ColorTheme = () => {

    // local state so we don't need to use redux here
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    return (
        <>
            <input type="text" onChange={(evt) => setColor(evt.target.value)}/>
            <button onClick={() => 
            {dispatch(changeColor(color))}
            }>Change color</button>
        </>
    )
}

export default ColorTheme;