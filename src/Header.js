import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";



const Header = () =>{
    const navigate = useNavigate();
    const nick=" not logged in";
    return(
        <div style={{textAlign: 'right' }}>
            Email:{nick}
            <Button onClick={() => navigate("/login")} variant="outline-primary" style={{marginLeft:20}}>LogIn/Register</Button>
        </div>
    )
}

export default Header