const storage = require('./storage')
const store = require('./storage')

function addCarrera(nombre, descripcion){
    return new Promise(( resolve, reject ) => {
        let carrera ={
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.add(carrera)
        resolve(carrera)
    })
}

function getCarrera(){
    return new Promise(( resolve, reject ) => {
        resolve( storage.get() )
    })
}

function updateCarrera(nombre, descripcion){
    return new Promise(( resolve, reject ) => {
        let carrera ={
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.update(carrera)
        resolve(carrera) 
    })
}

function deleteCarrera(nombre){
    return new Promise(( resolve, reject ) => {
        storage.delete(nombre)
        resolve(nombre)
    })
}

module.exports = {
    addCarrera,
    getCarrera,
    updateCarrera,
    deleteCarrera,
}