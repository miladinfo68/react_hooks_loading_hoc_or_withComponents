import React, { useState, useEffect, useCallback } from 'react'

const Child = ({ returnComment }) => {
    // console.log("2")
    useEffect(() => {
        console.log("child component was called!");
    }, [returnComment]);

    return (
        <div>{returnComment(new Date().toLocaleDateString())}</div>
    )
}

const _9_useCallback2 = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("this data come from api.");

    //by click in parent component ,child render every time to prevent we use useCallbak (or useMemo)
    // const returnComment = () => {
    //     // console.log("1")
    //     return data;
    // }

    //child component only once change,data change in parent component
    const returnComment = useCallback((currentTime) => {
        // console.log("1")
        return data + "[" + currentTime + "]";
    }, [data]);

    return (
        <div className="hooks">
            <h1> useCallback as a 9th hook</h1>
            <Child returnComment={returnComment} />
            <button onClick={() => setToggle(!toggle)}>toggle parent component</button>
            {toggle && <h1>toggle clicked!</h1>}
        </div>
    )
}

export default _9_useCallback2
