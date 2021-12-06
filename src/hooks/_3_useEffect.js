import { useEffect, useState } from 'react'

const _3_useEffect = () => {
    const [counter, setcounter] = useState(0);

    //only first time that component will be rendered. invoke
    useEffect(() => {
        console.log(1,counter);
        return () => console.log(11)
    }, []);

    //first time and everytime that counter will be changed. invoke
    //mean hook is depend on changing counter
    useEffect(() => {
        console.log(2,counter);
        return () => console.log(22)
    }, [counter]);

    //everytime invoke
    useEffect(() => {
        console.log(3,counter);
        return () => console.log(33)
    });





    return (
        <div className="hooks">
            <h1> useEffect as a 3th hook</h1>
            <div>{counter}
                <button onClick={() => { setcounter(counter + 1) }}>Increase No</button>
            </div>
        </div>
    )
}

export default _3_useEffect
