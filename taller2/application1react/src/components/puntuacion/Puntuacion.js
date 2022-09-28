import CardPuntuacion from "./Card-puntuacion";
import "./Puntuacion.css"
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";

function Puntuacion(){
    return(
        <section id="puntuacion">
        <h2>Nuestros usuarios dicen...</h2>

        <div className="feature-row">
            <CardPuntuacion
            nombre='Diego Rodriguez'
            user='fa-solid fa-bell-concierge'/>
            <CardPuntuacion
            nombre='Diana Garcia'
            user='fa-solid fa-bed'/>
            <CardPuntuacion
            nombre='Diego Rodriguez'
            user='fa-solid fa-wifi'/>
        </div>
    </section>
    );
}

export default Puntuacion;