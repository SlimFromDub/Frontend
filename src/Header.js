import Button from 'react-bootstrap/Button';



const openLoginPage=()=>{

}

const Header = () =>{
    const nick=" not logged in";
    return(
        <div style={{textAlign: 'right' }}>
            Email:{nick}
            <Button onClick={openLoginPage} variant="outline-primary" style={{margin:20}}>LogIn/Register</Button>{' '}
        </div>
    )
}

export default Header