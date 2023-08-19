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

export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareas_proyecto: state.tareas.filter(tarea => tarea.proyecto_id === action.payload)
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [ action.payload, ...state.tareas],
                error_tarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                error_tarea : true 
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload :tarea)
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tarea_seleccionada: action.payload
            }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tarea_seleccionada: null
            }                          
        default:
            return state;
    }
}