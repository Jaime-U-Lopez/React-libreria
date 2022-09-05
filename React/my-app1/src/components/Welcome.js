
//invocar una useState
import {useState,useEffect} from "react"
export default function Welcome (Props){
console.log(Props);

//realizar un array de contador para que almacene los numero y los fuarde en counter
const [counter, setcounter] = useState(0);

const [semaforo,setSemaforo] = useState(false);

useEffect(() =>{console.log(semaforo);},[semaforo])

function contar() {
        console.log("entrando a contar estado ",{semaforo});
        setcounter(counter + 1);
        setSemaforo(!semaforo);
    }

const {name}=Props;

return (

    
    <div>
        <h1>Hola, {name}</h1>
        <p> haz creado un contador de react con hooks</p>
        <h4>numero del contador es {counter} </h4>
        <p>el semaforo esta en color {semaforo ?"red":"green"}</p>
        <button type ="submit"  onClick={contar} >
            sumar contador 
        </button>
    </div>

);
    
      


    // traer una propiedad de la hoja app.js
/* 
    return (

        <div>

            <p> Hola desde componente welcomm propiedad  1 que esta en App {mesagge}</p>
            <p> Hola desde componente welcomm  propiedad 2 que esta en app {saludo}</p>

        </div>

    ); */

    

}
