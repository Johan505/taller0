import "./Card-puntuacion.css";

function CardPuntuacion({user, nombre, stars, texto}){
    return(
            <div className="cards">
                <img>{user}</img>
                <p>{nombre}</p>
                <i className={stars}></i>
                <p>{texto}</p>
            </div>
    );
}

export default CardPuntuacion;