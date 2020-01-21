const Paciente = require("../models/paciente")

exports.nuevocliente = async (req, res, next) => {
    let response = {};
    const paciente = new Paciente(req.body)
    try{
        await paciente.save();
        response.succes = true;
        response.mensaje = "Exito1";
    }catch(e){
        response.succes = "false";
        response.mensaje = `El error es : ${e}`;
        next();
    }
    res.json(response)
}

exports.getpatients = async (req, res, next) => {
    let response = {};
    
    try{
        const patients = await Paciente.find({});
        response.succes = true;
        response.result = patients;
    }catch(e){
        response.succes = "false";
        response.mensaje = `El error es : ${e}`;
        next();
    }
    res.json(response)
}
exports.getpatientbyid = async (req, res, next) => {
    let response = {};
    
    try{
        const patient = await Paciente.findById(req.params.id);
        response.succes = true;
        response.msg = "prueba en debug 1";
        response.result = patient;
    }catch(e){
        response.succes = "false";
        response.mensaje = `El error es : ${e}`;
        next();
    }
    res.json(response)
}
exports.updatepatient = async (req, res, next) => {
    let response = {};
    
    try{
        const patient = await Paciente.findByIdAndUpdate({_id: req.params.id}, req.body, {
            new: true
        });
        response.succes = true;
        response.result = patient;
    }catch(e){
        response.succes = "false";
        response.mensaje = `El error es : ${e}`;
        next();
    }
    res.json(response)
}
exports.deletepatientbyid = async (req, res, next) => {
    let response = {};
    
    try{
        await Paciente.findByIdAndDelete({_id: req.params.id});
        response.succes = true;
    }catch(e){
        response.succes = "false";
        response.mensaje = `El error es : ${e}`;
        next();
    }
    res.json(response)
}