import { useState } from 'react'

const _1_useState = () => {
    // let counter = 0;
    // const increament = () => {
    //     counter += 1;
    //     console.log(counter)
    // }

    const increament = () => {
        setcounter(counter + 1)
        // console.log(counter);
    }

    const handleChange=(e)=>{
        setText(e.target.value);
    }


    const [counter, setcounter] = useState(0);
    const [text, setText] = useState("");

    
    return (
        <div className="hooks">
            <h1> useState as a first hook</h1>
            <div>{counter} <button onClick={increament}>Increase No</button></div>
            <div>
                <input name="text" onChange={handleChange} />
                <p>{text}</p>
            </div>

        </div>
    )
}

export default _1_useState
