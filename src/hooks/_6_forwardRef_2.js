//https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
import { useEffect, useRef, forwardRef } from 'react';

//hoc=high order component
const Input = forwardRef((props, ref) => <input {...props} ref={ref} />);

const _6_forwardRef_2 = () => {

  //pass focus by enter key between field
  const userNameRef = useRef(null);
  const passRef = useRef(null);
  const emailRef = useRef(null);
  const submitBtnRef = useRef(null);

  useEffect(() => { userNameRef.current.focus(); }, []);
  const handleKeyPress = e => {
    const { type } = e.target;
    if ("enter" === e.key.toLowerCase()) {
      switch (type) {
        case "text":
          passRef.current.focus();
          break;
        case "password":
          emailRef.current.focus();
          break;
        case "email":
          submitBtnRef.current.focus();
          break;
        case "submit":
          e.preventDefault();
          break;
        default:
          break;
      }
    }

  }
  return (
    <div className="hooks">
      <h1> forwardRef as a 6th hook example 2</h1>
      <div className="mt-2">
        Username : <Input type="text" name="username" onKeyDown={e => handleKeyPress(e)} ref={userNameRef} />
      </div>
      <div className="mt-2">
        Password : <Input type="password" name="password" onKeyDown={e => handleKeyPress(e)} ref={passRef} />
      </div>
      <div className="mt-2">
        Email : <Input type="email" name="email" onKeyDown={e => handleKeyPress(e)} ref={emailRef} />
      </div>
      <div className="mt-2">
        <Input type="submit" name="submit" value="submit" onClick={e => alert("submitted!")} ref={submitBtnRef} />
      </div>
    </div>
  )
}



export default _6_forwardRef_2
