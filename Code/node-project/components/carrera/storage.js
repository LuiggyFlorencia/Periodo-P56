const { response } = require('express');
const db = require('mongoose')
const model = require('./model')

const uri = "mongodb+srv://ups:ups2020@cluster0.q5kct.gcp.mongodb.net/utups?retryWrites=true&w=majority";

db.Promise = global.Promise
db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'utups',
})
    .then((data) =>{
        console.log('[db] - Conectada con exito')
    })
    .catch((error) => {
        console.error('[error log] - '+ error );
    })


const list = []

function addCarrera(Objeto){
    const carrera = new model(Objeto)
    carrera.save()
}

async function getCarrera(){
    const carreraList = await model.find()
    return carreraList
}

async function updateCarrera(idCarrera, Objeto){
    const foundCarrera = await model.findOne({ _id: idCarrera })
    foundCarrera.nombre = Objeto.nombre
    foundCarrera.abreviatura = Objeto.abreviatura
    foundCarrera.descripcion = Objeto.descripcion

    const result = await foundCarrera.save()
    return(result)
}

function deleteCarrera(idCarrera){
    return model.deleteOne({_id: idCarrera})
}

module.exports = {
    add: addCarrera,
    get: getCarrera,
    update: updateCarrera,
    delete: deleteCarrera,
}