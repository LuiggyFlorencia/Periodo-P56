var nombre = 'Luiggy'
var apellido = 'Florencia'

var nombre = 'Luiggy', apellido = 'Florencia'

var nombreMayusculas = nombre.toUpperCase()
var apellidoMayusculas = apellido.toUpperCase()

//Javascript puro
console.log( nombreMayusculas + ' ' + apellidoMayusculas)
//Especificacion de Javascript - EcmaScript +6
console.log( `${nombre} ${apellidoMayusculas}` )

var primeraLetraNombre = nombre.charAt(0)
var longitudNombre = nombre.length
var subcadenaNombre = nombre.substr(1, 3)

console.log( primeraLetraNombre )
console.log( longitudNombre )
console.log (subcadenaNombre )