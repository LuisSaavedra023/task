import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {
    //extraer proyectos del state inicial.
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;
    //obtener las tareas del proyecto.
    const tareasContext = useContext(tareaContext);
    const { tareas_proyecto } = tareasContext;
    

    //si no hay proyecto seleccionado.
    if (!proyecto) return <h2>Selecciona un proyecto</h2>
    //array destructuring para extraer el proyecto actual.
    const [proyectoActual] = proyecto;
    //elimina un proyecto.
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {tareas_proyecto.length === 0
                    ?
                        (<li className='tarea'><p>No hay tareas</p></li>) 
                    :
                        <TransitionGroup>
                        {
                            tareas_proyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea
                                    tarea={tarea}
                                />
                            </CSSTransition>
                            ))
                        }
                        </TransitionGroup>
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onClickEliminar}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
        
    );
}
 
export default ListadoTareas;