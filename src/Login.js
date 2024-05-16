import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';


function Login(){

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const onButtonClick = () => {
      if(fetchData(login, password))
        {
          navigate("/home");
        }
      }

      const fetchData = async (login, password) => {
        try {
          const url = `http://localhost:8000/checkPassAbl/?login=${login}&password=${password}`;
          const response = await axios.get(url);
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

 return(
    <div className={'mainContainer'}>
    <div className={'titleContainer'}>
      <div>Login</div>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        type="text" 
        value={login}
        placeholder="Enter your email here"
        className={'inputBox'}
      />
      
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        type="password" 
        value={password}
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