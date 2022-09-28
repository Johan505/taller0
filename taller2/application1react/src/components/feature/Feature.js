import CardFeature from "./Card-feature";
import "./Feature.css";
function Feature(){
    return(
        <section id="feature">
            <h2>Razones por las que disfrutaras quedarte con nosotros</h2>

            <div className="feature-row">
                <CardFeature
                texto='Reservas'
                background={true}
                icon='fa-solid fa-bell-concierge'/>
                <CardFeature
                texto='Habitaciones'
                background={false}
                icon='fa-solid fa-bed'/>
                <CardFeature
                texto='Wifi'
                background={true}
                icon='fa-solid fa-wifi'/>
                <CardFeature
                texto='Gimnasio'
                background={false}
                icon='fa-solid fa-dumbbell'/>
            </div>
        </section>
    );
}

export default Feature;