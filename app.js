/* 
- El punto y coma no es obligatorio pero es recomendado
- Comillas dobles y comillas simples son validas por igual
- JS es case sensitive
*/

// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Dime tu numero entre 1 y 10");

// Comprobacion de numero agregado
console.log(numeroUsuario);

if(numeroSecreto == numeroUsuario) {
    alert(`El numero correcto es ${numeroSecreto}`)
} else {
    alert("Numero incorrecto")
}