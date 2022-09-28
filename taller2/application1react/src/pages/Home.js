import Banner from "../components/banner/Banner";
import Descripcion from "../components/descripcion/Descripcion";
import Feature from "../components/feature/Feature";
import Navbar from "../components/navbar/Navbar";
import Puntuacion from "../components/puntuacion/Puntuacion";
import Ubicacion from "../components/ubicacion/Ubicacion";


function Home(){
    return(
        <>
            <Navbar/>
            <Banner/>
            <Descripcion/>
            <Feature/>
            <Ubicacion/>
            <Puntuacion/>
        </>
    );
}

export default Home;