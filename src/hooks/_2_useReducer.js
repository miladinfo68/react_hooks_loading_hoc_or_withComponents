import { useReducer } from 'react';

const initialState = { counter: 0, showText: "" }

const fnReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { counter, showText } = state;
    switch (type) {
        case "INCREMENT":
            return { ...state, counter: counter + 1 }
        case "TOGGLE_SHOW_TEXT":
            return { ...state, showText: !showText }
        default:
            return state;
    }

}


const _2_useReducer = () => {

    const [state, dispatch] = useReducer(fnReducer, initialState);
    const { counter, showText } = state;
    
    const toggleHandler = e => {
        dispatch({ type: "INCREMENT" });
        dispatch({ type: "TOGGLE_SHOW_TEXT" });
    }

    return (
        <div className="hooks">
            <h1> useReducer as a second hook</h1>
            <h3>{counter}</h3>
            <button onClick={toggleHandler}>Click hear</button>
            {showText && <p>this is a text</p>}
        </div>
    )
}
export default _2_useReducer








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// import { useState } from 'react';
// const _2_useReducer = () => {
//     const [counter, setCounter] = useState(0);
//     const [showText, setShowText] = useState(true);
//     const toggleHandler = e => {
//         setCounter(counter + 1);
//         setShowText(!showText);
//     }
//     return (
//         <div>
//             <h1> useReducer as a second hook</h1>
//             <h3>{counter}</h3>
//             <button onClick={toggleHandler}>Click hear</button>
//             {showText && <p>this is a text</p>}
//         </div>
//     )
// }
// export default _2_useReducer
