/* 
- El punto y coma no es obligatorio pero es recomendado
- Comillas dobles y comillas simples son validas por igual
- JS es case sensitive
*/

let numeroSecreto = 6;
let numeroUsuario = prompt("Dime tu numero");

console.log(numeroUsuario);

if(numeroSecreto == numeroUsuario) {
    alert("Numero correcto")
}