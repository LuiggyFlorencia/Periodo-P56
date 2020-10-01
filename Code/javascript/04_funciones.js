var nombreapellido = 'Luiggy Florencia'
var edad = 24

//funcion tipo declarativa
function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}`)
}

//funcion tipo flecha
var imprimirEdad2 = (nombre, edad) => { console.log(`${nombre} tiene la edad de ${edad}`)}

//funcion tipo expresiva
var imprimirEdad3 = function(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}`)
}

imprimirEdad(nombreapellido, edad)
imprimirEdad('Steven Florencia', 24)
imprimirEdad2 (nombreapellido, edad)
imprimirEdad('Steven Florencia', 24)