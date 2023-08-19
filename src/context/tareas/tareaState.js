import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index';
import {v4} from  'uuid'

const TareaState = props => {
    const initialState = {
        tareas: [
            { id:1, nombre: "Elegir Plataforma", estado: false, proyecto_id: 1 },
            { id:2, nombre: "Elegir Colores", estado: false, proyecto_id: 2 },
            { id:3, nombre: "Elegir Hosting", estado: true, proyecto_id: 3 },
            { id:4, nombre: "Elegir Plataforma", estado: false, proyecto_id: 3 },
            { id:5, nombre: "Elegir Colores", estado: false, proyecto_id: 2 },
            { id:6, nombre: "Elegir Hosting", estado: true, proyecto_id: 1 }
        ],
        tareas_proyecto: null,
        error_tarea: false,
        tarea_seleccionada: null
    }
    //crear el dispatch.
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);
    //obtener las tareas de un proyecto.
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    //agregar una tarea al proyecto seleccionado.
    const agregarTarea = tarea => {
        tarea.id = v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea 
        })
    }
    //valida y muestra un error en caso de ser necesario.
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    //eliminar tarea por id.
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    //cambia el estado de cada tarea.
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    //extrae una tarea para edición.
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    //edita o modifica una tarea.
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    //elimina la tarea seleccionada.
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }  
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareas_proyecto : state.tareas_proyecto,
                error_tarea: state.error_tarea,
                tarea_seleccionada: state.tarea_seleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
 export default TareaState;
