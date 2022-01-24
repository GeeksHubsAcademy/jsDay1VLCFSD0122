
/* 

Esto es un comentario
multi linea porque se puede
usar en varias lineas

*/

//Esto es un simple comentario de una línea.

/**
 *
*/
/*
console.log("Hola mundo cruel Lunes");

let alumno = "Juan";

console.log(alumno);

let numero = 10;
let variable2 = "10";

let booleano = true;
let booleano2 = false;

console.log(booleano,booleano2);

let cajonAndreu;

console.log(cajonAndreu);*/
/*
let numero1 = 2;
let numero2 = -89;

numero1++; //Incrementar

numero1--; //Decrementar

//console.log(numero1);

//console.log(-numero2);
/*
numero2 = -numero2;

console.log(numero2);

let resultadoOperacion = 2**3;

console.log(resultadoOperacion);*/
/*
let numero = 5;

let numero2 = 3;

//numero = numero + 1;

numero += 1; //es una forma abreviada de usar lo de la línea de arriba

console.log(numero);

numero2 -= 100;

//Comparaciones

let a = 25;
let b = 250;*/

let numero1 = 10;
let numero2 = 20;

let resultado = numero2 % numero1;

console.log(resultado);

if(numero1 < numero2){

    console.log("HAHAHAHAHAH");

};

let nombre = "Ramon";
let apellido = "Ibañez";

if(nombre == "Manuel"){
    console.log("Bienvenido señor Manuel");
} else {

    console.log("como no se cumple lo de arriba, entramos en el else");
}

let pedido = "Cacique";
let ronDiscoteca = "Matusalem";

if(ronDiscoteca == "Brugal"){
    console.log("Aquí tiene su Brugal");
} else if (ronDiscoteca == "Barceló"){
    console.log("Aquí tiene su Barceló");
} else if (ronDiscoteca == "Santa Teresa"){
    console.log("Aquí tiene su Santa Teresa");
} else {
    console.log("Resulta que has pedido ", pedido, " , y no tenemos");
}

let coche = "Mercedes";
let km = 218000;
let color = "Verde oscuro";

if(coche == "Mercedes"){

    if(km > 10000){

        if(color != "Rojo"){
            console.log("Premio, ha ganado un Mercedes");
        }
    }
};

console.log("no actualizo nada");


//let pregunta = prompt("Como te llamas?");
let numero = parseInt(prompt("Dime cuantos años tienes?"));
console.log(numero);