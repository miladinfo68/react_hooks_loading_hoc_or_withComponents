
import React, { useState, useCallback } from 'react'
const funccount = new Set();

const _9_useCallback = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    ////by change state all three function will be called
    // const incrementCounter = () => setCount(count + 1);
    // const decrementCounter = () => setCount(count - 1);
    // const incrementNumber = () => setNumber(number + 1);

    //when count changes incrementCounter && decrementCounter function will be called
    //when number changes only incrementNumber function will be called
    const incrementCounter = useCallback(() => { setCount(count + 1) }, [count])
    const decrementCounter = useCallback(() => { setCount(count - 1) }, [count])
    const incrementNumber = useCallback(() => { setNumber(number + 1) }, [number])

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);

    console.log("size",funccount.size);

    return (
        <div className="hooks">
            <h1> useCallback as a 9th hook</h1>
            <p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need.</p>
            <p>Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
            <div>
                <h1>Count: {count}</h1>
                <div><button className="btn btn-success" onClick={incrementCounter}> Increase counter</button></div>
                <div className="my-2"><button className="btn btn-primary" onClick={decrementCounter}> Decrease Counter </button></div>
                <div><button className="btn btn-secondary" onClick={incrementNumber}> increase number</button></div>
            </div>
        </div>
    )
}

export default _9_useCallback
