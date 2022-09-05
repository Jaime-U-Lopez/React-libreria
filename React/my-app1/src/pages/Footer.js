import { useParams } from "react-router-dom";

export default function Footer(){

const {name} = useParams();

    return(

        <div>

        <p>  
        Estamos en footer con {name}, bien
        
        </p>
        </div>
    )
}