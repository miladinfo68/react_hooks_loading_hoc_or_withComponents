import { useRef, useState } from 'react'

const _4_useRef = () => {

    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setText(e.target.value);
    }


    return (
        <div className="hooks">
            <h1> useRef as a 4th hook to manipulate dom elements directly !</h1>
            <div>
                <h3> {text}</h3>
                <input name="text" placeholder="Ex..." onChange={handleChange} ref={inputRef} />
                <button onClick={() => { inputRef.current.focus(); }}>Get Focus</button>
                <button onClick={() => { inputRef.current.value = ""; }}>Reset</button>
            </div>
        </div>
    )
}

export default _4_useRef
