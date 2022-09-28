import "./Card-feature.css";

function CardFeature({texto,background,icon}){
    return(
        <article className={background? "feature-box box-blue":"feature-box box-dark"}>
            <i className={icon}></i>
            <h3>{texto}</h3>
        </article>
    );
}

export default CardFeature;