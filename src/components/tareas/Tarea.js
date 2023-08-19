import React, { useContext } from 'react'
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {
    //obtener la función del context de tarea.
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;
    //extraer si un proyecto está activo.
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    //extraer el proyecto.
    const [proyectoActual] = proyecto;
    //función que se ejcuta cuando el usuario presiona el botón de eliminar tarea.
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }
    //función que modifica el estado de las tareas.
    const cambiarEstado = tarea => {
       if (tarea.estado) {
            tarea.estado = false;
       } else {
            tarea.estado = true
       }
       cambiarEstadoTarea(tarea) 
    }
    //agrega una tarea actual cuando el usuario decida editarla.
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }
    return ( 
        
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {tarea.estado
                    ?
                        <button
                            type='button'
                            className='completo'
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Completo
                        </button>
                    :
                        <button
                            type='button'
                            className='incompleto'
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Incompleto
                        </button>  
                }
            </div>
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}
                >
                    Editar
                </button>
                <button
                   type='button'
                   className='btn btn-secundario'
                   onClick={() => tareaEliminar(tarea.id)} 
                >
                    Eliminar
                </button>
            </div>
        </li> 
    );
}
 
export default Tarea;