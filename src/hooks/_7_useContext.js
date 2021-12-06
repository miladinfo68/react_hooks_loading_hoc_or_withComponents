import { useState, createContext, useContext } from 'react';
const AppContext = createContext(null);

const _7_useContext = () => {
    const [username, setUsername] = useState("");
    const [show, setShow] = useState(false);

    //all shared value and function between components
    const globalState={ username, setUsername, show, setShow }
    
    return (
        <AppContext.Provider value={globalState} >
            <div className="hooks">
                <h1> useContext as a 7th hook</h1>
                <Login />
                <User />
                <MetaInfo />
            </div>
        </AppContext.Provider>
    )
}

const Login = () => {
    const { setUsername } = useContext(AppContext);
    return (
        <input onChange={e => setUsername(e.target.value)} />
    )
}

const User = () => {
    const { username } = useContext(AppContext);
    return (
        <span>User : {username}</span>
    )
}

const MetaInfo = () => {
    const { show, setShow } = useContext(AppContext);
    return (
        <>
            <button onClick={e => setShow(!show)}>show-hide meta data</button>
            {show && <span>this is meta data about user </span>}
        </>
    )
}


export default _7_useContext


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2


// import { useState } from 'react';
// const Login = ({ setUsername }) => <input onChange={e => setUsername(e.target.value)} />
// const User = ({ username }) => <span>User : {username}</span>
// const _7_useContext = () => {
//     const [username, setUsername] = useState("");
//     return (
//         <div className="hooks">
//             <h1> useContext as a 7th hook</h1>
//             <Login setUsername={setUsername} />
//             <User username={username} />
//         </div>
//     )
// }
// export default _7_useContext
