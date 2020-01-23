import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

const Cita = (props) => {
    const cita = props.cita;

    if (!cita) {
        props.history.push("/")
        return null
    }

    const eliminarcita = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Una cita eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                clienteAxios.delete(`/pacientes/${id}`)
                    .then(({ res }) => {
                        props.guardarConsulta(true)
                        props.history.push("/")
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <Fragment>
            <h1 className="my-5">Sobre cita {cita ? cita.nombre : ""}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 text-center">
                        <Link to={'/'} className="btn btn-outline-success mx-auto px-5 py-2">VOLVER</Link>
                    </div>
                    <div className="col-md-8 mx-auto mt-5 ">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column  align-items-start">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{cita.nombre}</h3>
                                    <small className="fecha-alta">
                                        {cita.fecha} - {cita.hora}
                                    </small>
                                </div>
                                <p className="mb-0">
                                    {cita.sintomas}
                                </p>
                                <div className="contacto py-3">
                                    <p>Dueño: {cita.propietario}</p>
                                    <p>Dueño: {cita.telefono}</p>
                                </div>
                                <div className="">
                                    <button type="button" onClick={() => eliminarcita(cita._id)} className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger btn-block">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Cita);