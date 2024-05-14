

const Header = () =>{
    const time=new Date();
    return(
        <footer style={{textAlign: 'right'}}> 
            Date: {time.toDateString()}
        </footer>
    )
}

export default Header