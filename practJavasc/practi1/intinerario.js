/* // pruebas  para mejorar la logica de programacion:

1)  programa que pida dos numeros y que nos diga cual  es el mayor y el menor y si son iguales

promp
2)al programa anterio: si los numeros no son numero o son mmenores o iguales a ccero, nos lo vuelva a pedir

3) utilizando un bucle, mostrar la suma y la media de los nuemros introducidos hasta introducir un numero negativo y ahi mostrar el resultado


promp

array
4) hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario

5) mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario

6)muestre todos los numeros divisores de un numero que metes en el propmp

7) programa que nos diga si un numero es par o impar 
71 ventana prompt

7.2 si no es valido que nos pida de nuuevo el numero

8) tabla de multiplicar de un numero introducido por pantalla


9) calculadora:

pida dos numeros por pantalla 

si metemos uno mal que nos los vuelva a pedir 

en el cuerpo de la pagina, en una aleta y por la consola el resultado de sumar, restar, multiplicar y diividr esas dos cifras

refactoriza el codigo para encapsilarlo todo en funciones reulizables

10) programa que pida 6 numero por pantalla y los ingrese a un array, y luego los muestre en pantalla 


11) mostrar el array anterior entero ( todos sus elementos en el cuerpo de la pagina y en la consola ( usnado funciones))


12) ordenar el array anterior mostrarlo 

posicionar array 

13) invertir el array anterior y mostrarlo (el orden )


14)mostar cuantos elementos tiene el array anterior 

15)busquedqa de un valor introducido por el usuario que nos diga si la encuentra  y el array o no



// Dom y eventos 

16)   ejercicio con dom y eventos

16.1 formulario campos : nombre apellido , edad
16.2 boton de enviar el formulario: eventos submit 
16.3 mostrar datos por pantalla 
16.4  validacion del fomulario para que no se metan datos vacios


17) crear un formulario para guardar nombres de persona en el local storage y mostrarlo por pantantalla en lista de html

18) en la lista anterio añade boton para poder elimiar elemntos de local strorage

19) haz una peticion ajax a un api rest publica y muestra un listado de datos 

20) nuestra la fecha de hoy y un numero aleatorio de 1 a 120

21) maquete una web clone 

22) hacer una slider  funcional 

23 muestra un listado de articulos almancenado en un json y muestralo dinamicamente 

24 has un cambiado de temas en la pagina creada (en el putno 21)

25) al final de la pagina web habra un boton para subir al principio de la web haciendo una animacion en el scrol automatico y suavizado

26) hacer un formulario que nos premita guardar en el localstorage en el nombre y apelliudos del usuario que este en el a web y en elc aso de que exita la seccion  anomima 

27) seccion " sobre mi en la que bra un acordeon"

28)  seccion relog en la que habra un relog dinamico con javascript ( os usan un objeto dato de js o libreria 
    )
29 seccion de contacto con formulario y validacion 

30

 */



// desarrolla

// 1)  ok programa que pida dos numeros y que nos diga cual es el mayor y el menor y si son iguales

function numeros1 (a,b ){

    if  (a>b ){
        console.log("A es mayor que B")
        return
    }else if(b===a){
        console.log("A y B son iguales")
        return
    }else if (a<b) {
        console.log(" b es mayor que a  ")
        return
    }   


}

numeros1 (0,0)






//2) ok al programa anterio: si los numeros no son numero o son menores o iguales a cero, nos lo vuelva a pedir


/* 
const valorA= Document.getElementById('v1');
const valorB= Document.getElementById('v2')

 */

function numeros (a,b ){

    if  (a>b ){
        console.log("A es mayor que B")
        return
    }else if(a===0 && b===0){
        console.log("los numeros son ceros valide por favor y vuelva a ingresarlos ")

    }else if (a<b && a>=0) {
        console.log(" b es mayor que a  ")
        return

    
    }else if(a===b) {
        console.log("A y B son iguales")
        return
    }else{

        console.log("cumple las condiciones  ");
    }

}


numeros (2,-45)


//3) ok utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
// validar que sea numerico

/* var numeros = [ ];

function ingresaNumeros (a){

    if (a >0) {
        numeros.push(a)
    }
    
}


function correrNumerosArray(array){
    if (!Array.isArray(array)){
        return null
    }

    let sum=0;
    
    for (let i=0; i< array.length ; i++){
        
        if(  i>0){

            const elemento = array[i];
            sum +=parseInt (elemento);   
            console.log(elemento)
        }else {
            console.log("no se admiten numeros negativos")
        }
    }
    
    
    return  sum
}

ingresaNumeros(45)
ingresaNumeros(655)
ingresaNumeros(5)
ingresaNumeros(56)
ingresaNumeros(5454)
ingresaNumeros(-3)


var leer =correrNumerosArray(numeros)
console.log(leer)

fruits = [
    {  description: 'orange', Amount: 50},
    {  description: 'orange', Amount: 50},
    {  description: 'apple', Amount: 75},
    {  description: 'kiwi', Amount: 35},
    {  description: 'watermelon', Amount: 25},
];
   
const sumall = fruits.map(item => item.amount).reduce((prev, curr) => prev + curr, 0);

console.log("suma",sumall);

 */

// cuente los repetidos en un array


//4)  ok hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario



/* const valorA=document.getElementById('v1');
const valorB=document.getElementById('v2');
 */
/* console.log(valorA.value) */

/* var numerosHTML=[];

function numerosIntroducidos(a,b){

    var a,b, sum, resta,

    a=parseInt(prompt("ingresa la a: "))
    b=parseInt(prompt("ingresa la b"))

    sum =a+b
    resta= a-b
    media= sum/25

    alert( "La suma es :"+ sum)
    alert("La resta es :"+  resta)
    alert("La media es : "+media)
    alert("Numeros introducidos  son a y b : "+a +" b : "+b )

}
 */

//5) ok mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario


function impares(){

var a, b ,c

a= parseInt(prompt("ingresa el numero a validar: "))

if (c=a%2=== 0 ){

    alert("este valor es par "+a)
    

}else{
    alert("este valor es impart :"+a)
}

b= parseInt(prompt("ingresa el numero a validar: "))

if (b%2 === 0){

    alert("Este valor es par "+b)

}else{
    alert("Este valor es impart"+b)
}}

//6) ok muestre todos los numeros divisores de un numero que metes en el propmp


function consultarDivisor(){
    var valor

    valor=parseInt(prompt("consulta los divisores: "))
    for (let index = 0; index < valor; index++) {

        if(valor%index===0){
        alert( "los divisores son :"+ index)
    }
    }
}

//8) tabla de multiplicar de un numero introducido por pantalla



function tablaMultplicar(){

    var valor,valor2

    valor= parseInt(prompt("ingresa el numero para hacer la tablas"))

    if( !isNaN(valor)){
               
                for (let index = 1; index < 11; index++) {
                    const element = index*valor;
                    alert(valor +" * "+index+"  = "+element)
                   
                }

    }else{

        alert("valide no ingreso valor ")
        valor2=valor
    }


}


/* 
9)  ok calculadora:

pida dos numeros por pantalla 

si metemos uno mal que nos los vuelva a pedir 

en el cuerpo de la pagina, en una aleta y por la consola el resultado de sumar, restar, multiplicar y diividr esas dos cifras

refactoriza el codigo para encapsilarlo todo en funciones reulizables

 */



/* function calculadora(){

    var numero1, numero2,sum, restar, multiplicar,dividir

    numero1 = parseInt(prompt("ingresa el numero 1:" ))
    numero2= parseInt( prompt("ingresa el numero 2:" ) )

    if (isNaN(numero1)||isNaN(numero2)){
       
        
        alert("valide no ingreso bien los valores")

    } else{

        sum = numero1 +numero2
        restar=numero1-numero2
        multiplicar=numero1*numero2
        dividir= numero1/numero2

        console.log({
            sum,
            restar,
            multiplicar,
            dividir
        })
        alert("consulta en la consola los resultados")
    }
}

 */
//10) programa que pida 6 numero por pantalla y los ingrese a un array, y luego los muestre en pantalla 

var numerArray=[]

function numerosPantalla(){
    var valor,valorarray, sum,alderecho


        for (let index = 0; index < 5; index++) {
            valor= parseInt(prompt("ingrese valor: " ))
            if (isNaN(valor)) {
                alert("error")
            }else{
                valorarray= numerArray.push(valor)

            }
    
        }   
        
    correrNumerosArraySuma()
    
    
    
    alert("resultados en consola ")
    
    
    
    
    var alderecho=numerArray.sort((a,b)=> a-b)
    console.log(alderecho);
    suma.innerHTML='<p> el valor de los array ingresados son : </p>'+alderecho
   

}



//11) mostrar el array anterior entero ( todos sus elementos en el cuerpo de la pagina y en la consola ( usnado funciones))




function correrNumerosArraySuma(){
    /* if (!Array.isArray(array)){
        return null
    } */

    let sum=0;
    
    for (let i=0; i< numerArray.length ; i++){
        
        if(  i>=0){

            const elemento = numerArray[i];
            sum +=parseInt (elemento);   
            console.log(elemento)
        }else {
            console.log("no se admiten numeros negativos")
        }
    }
    

    mensaje= '<p>el total de la suma es :</p>'+sum
    
    resta.innerHTML=mensaje
}



// 12) ok ordenar el array anterior mostrarlo posicionar array 

// con sort colocamos en orden el array y con reverse lo colocamos al reves


var arrayP=[2,9,5,7878,0]
var arrayP2=["zoraida","pedro","jose","manuel","alberto"]

function ordenarArray(){

    var alderecho=arrayP.sort((a,b)=> a-b)
    var invertir =arrayP.reverse()

    var alderecho2=arrayP2.sort() 

    console.log(alderecho)

    suma.innerHTML=alderecho+ "  "+alderecho2 + " "+invertir

}


//invertir el array anterior y mostrarlo (el orden )

var arrayP=[2,9,5,7878,0]
var arrayP2=["zoraida","pedro","jose","manuel","alberto"]

function revertirArray(){


    var invertir =arrayP.reverse()

    var alderecho2=arrayP2.sort() 

    console.log(alderecho2)

    suma.innerHTML=+alderecho2 + " "+invertir

}



//14)mostar cuantos elementos tiene el array anterior 


function CuentaElementosArray(){

    var cuenta=   arrayP.length
    suma.innerHTML="el todal de elementos es: "+cuenta
}


//15)busqueqa de un valor introducido por el usuario que nos diga si la encuentra  en el array si o no

var arrayP3=[2,9,5,7878,0]


function buscarValorArray(){

    var valoringr=parseInt(prompt("ingresa el numero a buscar "))

    for (let index = 0; index <= arrayP3.length; index++) {
        const element = arrayP3[index];
        console.log(element)
        
        if (element ) {
            alert("El numero si esta es: " +valoringr)
           
        }else{
            alert("El numero no esta en el array ")
            
        }
    }

    var informacionArr=(arrayP)
    suma.innerHTML='<p>el valor ingresado es   </p>' +informacionArr
}



// hallar el valor minimo de un array 


var numeros = [ 67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, -12, 100 ];

var min = numeros[0];


function EncontrarElMinimo(){


    for (var i = 0; i < numeros.length ; i++) {
        if (numeros[i] < min) {
            console.log('Anterior minimo: ' + min + ', nuevo minimo: ' + numeros[i]);
            min = numeros[i];

        }
    }
    console.log('Valor mínimo: ' + min);

    console.log(min)

    suma.innerHTML=min
}

// hallar el valor minimo de un array 

var numeros = [ -67, -67, -67, 11, 105, 8, 3, 93, 0, 0, 24, 7, -2, 33, 45, 28, 33, 100, -12, -12, 100 ];


function EncontElemtoyContarlo() {
    
    var encontrar=parseInt(prompt("ingresa el numero a buscar"))
    //var encontrar=100
    var NewArray=[]
    var sum, cuentaArray

    for (let index = 0; index < numeros.length; index++) {
        const element = numeros[index];
        if (element===encontrar){        
            numerArray.push(element)
            suma.innerHTML="el numero a buscar fue :"+encontrar  
            for (let i = 0; i < numerArray.length; i++) {
                const element = numerArray[i];
                sum = element+element
            }
            cuentaArray= numerArray.length

            resta.innerHTML="los numeros que existen en el array  buscado son: " +cuentaArray +" y son "+numerArray  +" y suman: "+sum
            return
        }else if(isNaN(encontrar)|| !encontrar  ){

            console.log("el numero no existe");
            alert("Ops no existe ese numero en el array")
            suma.innerHTML="el numero a buscar no existe en la lista o array"
            resta.innerHTML=""
            break
        }
           
        }
    
    console.log(numerArray)
    console.log(sum)
}

