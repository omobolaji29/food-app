import food from "../src/food.svg"
import { Link } from 'react-router-dom';
const Menu = () => {
    return (  
        <nav className="navbar">
            <img src={food} alt ="food logo"></img>
            <h1> Bola's Cafe</h1>
            <div className="links">
        
                <Link to="/">HOME</Link>
                <Link to="/Login">LOGIN</Link>
                <Link to="/Register">REGISTER</Link>

            </div>
        </nav>
    );
}
 
export default Menu ;