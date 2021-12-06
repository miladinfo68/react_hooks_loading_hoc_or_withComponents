import { useState, useEffect, useLayoutEffect, useRef } from 'react'
// https://stackoverflow.com/questions/66148855/is-uselayouteffect-preferable-to-useeffect-when-reading-layout
//https://daveceddia.com/useeffect-vs-uselayouteffect/
const _5_useLayoutEffect = () => {

    /*
    -- deffernt between useLayoutEffect and useEffect
    -1 state modified by user
    -2 virtual dom will be changed 
    -4 clean-up function called in useLayoutEffect [or useEffect if useLayoutEffect not exist ]to clear previous effect(related to befor render)
    -5 useLayoutEffect invoked synchronously just [before] page painted in browser
    -5 page painted in browser (painted real dom)
    -6 useEffect invoked asynchronously [after] page painted in browser
    */

    const [counter, setcounter] = useState(0);
    const refElm = useRef(null);

     //second it call /*useEffect or useLayoutEffect's order dosen't matter*/
    useEffect(() => {
        console.log(1);
        refElm.current.style.color = "red";
        return () => console.log(11);
    }, [counter]);

    //first it call /*useEffect or useLayoutEffect's order dosen't matter*/
    useLayoutEffect(() => {
        console.log(2);
        debugger
        refElm.current.style.color = "green";
        return () => console.log(22);
    }, [counter]);


    return (
        <div className="hooks">
            <h1 ref={refElm}> useLayoutEffect as a 5th hook</h1>
            <div>{counter} <button onClick={e => setcounter(counter + 1)}>Increase No</button></div>
        </div>
    )
}

export default _5_useLayoutEffect
