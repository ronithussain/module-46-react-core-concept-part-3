import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error,setError] = useState('')

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        if(passwordRef.current.value.length < 6){
            setError('password must be 6 character compolsory')
        }
        else{
            setError('')
            console.log(nameRef.current.value)
            console.log(emailRef.current.value)
            console.log(passwordRef.current.value)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input ref={nameRef} type="text" name="name"/>
              <br />
              <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email" id="" />
              <br />
              <input ref={passwordRef} type="password" name="password" id="" />
              <br />
              <input type="submit" value="Submit" />
              {
                error && <p>{error}</p>
              }
            </form>
        </div>
    );
};

export default RefForm;