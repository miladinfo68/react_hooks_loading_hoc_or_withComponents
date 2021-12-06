import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
let styled = { width: '10rem', height: '2rem', backgroundColor: '#2536d1', color: '#fff' }

//child component
const ChildButton = forwardRef((props, ref) => {
    const [toggle, seToggle] = useState(false);
    useImperativeHandle(ref, () => ({
        toggler() {
            seToggle(!toggle);
        }
    }));

    return (
        <>
            <div className="mt-1">
                <button style={styled} onClick={() => seToggle(!toggle)}>child button</button>
            </div>
            {toggle && <h3>child component toggled </h3>}
        </>
    )
});


//how to manage state of a child component from parent component
//this is where we must use useImperativeHandle and forwardRef

//parent component
const _6_forwardRef = () => {
    const buttonRef = useRef(null);
    return (
        <div className="hooks">
            <div>
                <h1> forwardRef as a 6th hook</h1>
                <button
                    style={styled}
                    onClick={() => buttonRef.current.toggler()}
                >parent button</button>
            </div>
            <ChildButton ref={buttonRef} />
        </div>
    )
}




export default _6_forwardRef
