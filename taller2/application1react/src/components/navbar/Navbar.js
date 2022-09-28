import logoh from "./Hotelia-horizontal-blanco.svg";
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    return(

        <header>
        <div className="logo">
            <img src={logoh} alt="Logo Hotelia blanco"/>
        </div>

        <nav>
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/habitaciones" className="menu-item">Habitaciones</Link>
            <Link to="/habitaciones/1" className="menu-item">Habitacion x</Link>
            
            <Link to="/login" className="btn-azul">
            <i className="fa-solid fa-user"></i>
            Iniciar Sesión</Link>
        
        </nav>
        </header>
    );
}

export default Navbar;