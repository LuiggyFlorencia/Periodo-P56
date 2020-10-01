const list = []

function addCarrera(Objeto){
    list.push(Objeto)
}

function getCarrera(){
    return list
}

function updateCarrera(Objeto){
    for(let i=0; i<list.length; i++){
        if(list[i].nombre == Objeto.nombre){
            list[i] = Objeto
        }
    }
}

function deleteCarrera(nombre){
    for(let i=0; i<list.length; i++){
        if(list[i].nombre == nombre){
            delete list[i]
        }
    }
}

module.exports = {
    add: addCarrera,
    get: getCarrera,
    update: updateCarrera,
    delete: deleteCarrera,
}