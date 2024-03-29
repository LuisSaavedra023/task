import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    //extraer si un proyecto está activo.
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    //obtener la función del context de tarea.
    const tareasContext = useContext(tareaContext);
    const { agregarTarea, validarTarea, error_tarea, obtenerTareas, tarea_seleccionada, actualizarTarea, limpiarTarea } = tareasContext;
    //effect que detecta si hay una tarea seleccionada.
    useEffect(() => {
        if (tarea_seleccionada !== null) {
            guardarTarea(tarea_seleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tarea_seleccionada])
    //state del formulario 
    const [ tarea, guardarTarea ] = useState({
        nombre: ''
    })
    //extraer el nombre del proyecto.
    const { nombre } = tarea;
    if (!proyecto) return null;

    const [ proyectoActual ] = proyecto;
    //leer los valores del formulario.
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        //validar.
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }
        //si es edición o si es nueva tarea.
        if (tarea_seleccionada === null) {
            //agregar la nueva tarea al state de tareas.
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente.
            actualizarTarea(tarea);
            //elimina tarea seleccionada del state.
            limpiarTarea();
        }
        
        //obtener y filtrar las tareas del proyecto actual.
        obtenerTareas(proyectoActual.id);
        //reiniciar el form.
        guardarTarea({
            nombre: ''
        })

    }
    return ( 
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={
                            tarea_seleccionada
                            ?
                                'Editar Tarea'
                            :
                                'Agregar Tarea'
                            }
                    />
                </div>
            </form>
            {error_tarea
            ?
                <p className='mensaje error'> El nombre de la tarea es obligatorio</p>
            :
                null}
        </div>
        
    );
}
 
export default FormTarea;