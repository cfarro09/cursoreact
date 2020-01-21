const express = require("express");
const router = express.Router();
const pacientecontroller = require("../controllers/paciente.controller");

module.exports = function(){

    router.post('/pacientes', pacientecontroller.nuevocliente)
    router.get("/pacientes", pacientecontroller.getpatients)
    router.get("/pacientes/:id", pacientecontroller.getpatientbyid)
    router.put("/pacientes/:id", pacientecontroller.updatepatient)
    router.delete("/pacientes/:id", pacientecontroller.deletepatientbyid)
    
    return router;
}