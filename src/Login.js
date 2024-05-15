import React from "react"
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate("/home");
      }

 return(
    <div className={'mainContainer'}>
    <div className={'titleContainer'}>
      <div>Login</div>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        
        placeholder="Enter your email here"
        
        className={'inputBox'}
      />
      
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        
        placeholder="Enter your password here"
        
        className={'inputBox'}
      />
      
    </div>
    <br />
    <div className={'inputContainer'}>
      <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
    </div>
  </div>
 )
}

export default Login