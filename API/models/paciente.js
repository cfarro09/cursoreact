const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pacientes_schema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    propietario: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true,
    },
    hora: {
        type: String,
        trim: true,
    },
    sintomas: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Paciente', pacientes_schema);