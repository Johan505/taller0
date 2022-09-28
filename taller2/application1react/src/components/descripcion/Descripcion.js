import "./Descripcion.css"
import logov from "./Hotelia-negro-vertical.svg";
function Descripcion(){
    return(
        <section id="descripcion">
            <div className="text-descripcion">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos corrupti nobis 
            esse numquam atque fugit est. Recusandae, cum repellendus! Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. Voluptatem quos corrupti nobis esse numquam atque fugit est. 
            Recusandae, cum repellendus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem quos corrupti nobis esse numquam atque fugit est. Recusandae, cum repellendus!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos corrupti nobis 
            esse numquam atque fugit est. Recusandae, cum repellendus!

            </div>

            <div className="img-descripcion">
                <img src={logov} alt="logo Hotelia"></img>
            </div>
        </section>
    );
}

export default Descripcion;