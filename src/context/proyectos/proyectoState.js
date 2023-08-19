import React, { useReducer } from "react";
import proyectoContext from './proyectoContext';
import proyectoReducer from "./proyectoReducer";
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types/index';
import {v4} from  'uuid'

const ProyectoState = props => {
    const proyectos = [
        { id:1, nombre: 'tienda virtual'},
        { id:2, nombre: 'intranet'},
        { id:3, nombre: 'tienda de juguetes'},
        { id:4, nombre: 'procesadores'},
    ]
    const initialState = {
        proyectos : [],
        formulario: false,
        error_formulario: false,
        proyecto: null
    }
    //dispatch para ejecutar las acciones.
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el crud.
    const mostrarFormulario = () => {

        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    //obtener proyectos.
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    //agregar nuevo proyecto, toma el payload como el proyecto completo.
    const agregarProyectos = proyecto => {
        proyecto.id = v4();
        //insertar el proyecto en el state.
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })

    }
    //valida el formulario por errores.
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    //selecciona el proyecto que el usuario dio click.
    const proyectoActual = proyectoID => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoID
        })
    }
    //elimina un proyecto.
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                error_formulario: state.error_formulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyectos,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
            
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;