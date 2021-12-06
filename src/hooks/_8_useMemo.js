// we usaly use useMemo when a heavy operion is need 
//a better replace for useEffect

import { useState, useMemo } from 'react'

const factorial = (n) => {
    console.log(`factorialOf(${n}) called!`);
    if (n <= 0) {
        console.log('___________________________________');
        return 1;
    }
    return n * factorial(n - 1);
}

const _8_useMemo = () => {

    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const memoizedFactorial = useMemo(() => factorial(number), [number]);
    return (
        <div className="hooks">
            <h1> useMemo as a 8th hook</h1>
            <p>useMemo is used when we have a heavy operation and want to prevent invoke it every time state chaneged(and consequencly component re-render)</p>
            Factorial of
            <input
                type="number"
                value={number}
                onChange={e => setNumber(Number(e.target.value))} min="0" max="50" />
            is {memoizedFactorial}
            <button onClick={e => setInc(inc + 1)}>Re-render</button>
        </div>
    )
}











// const _8_useMemo = () => {
//     const [number, setNumber] = useState(1);
//     const [inc, setInc] = useState(0);
//     return (
//         <div className="hooks">
//             <h1> useMemo as a 8th hook</h1>
//             Factorial of
//             <input
//                 type="number"
//                 value={number}
//                 onChange={e => setNumber(Number(e.target.value))} min="0" max="50"/>
//             is {factorial(number)}
//             <button onClick={e => setInc(inc + 1)}>Re-render</button>
//         </div>
//     )
// }

export default _8_useMemo
