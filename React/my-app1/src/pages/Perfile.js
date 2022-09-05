import { useParams } from "react-router-dom"

export default function Perfile (){

const {name} =useParams();

    return (

        <div>
        <p>Desde Profile, con el nombre {name} </p>
        </div>

    )

}