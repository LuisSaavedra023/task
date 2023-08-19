import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
    //obtener el state del formulario.
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyectos, error_formulario, mostrarError } = proyectosContext;
    //state para proyecto.
    const [ proyecto, guardarProyecto ] = useState({
        nombre:''
    });

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    };
    //extraer nombre del proyecto.
    const { nombre } = proyecto;
    //cuando el usuario envía un proyecto.
    const onSubmitProyecto = e => {
        e.preventDefault();
        //validar el proyecto con el return no se sigue ejecutando el código.
        if (nombre === ''){
            mostrarError();
            return
        }
        //agregar el proyecto al state
        agregarProyectos(proyecto);
        //reinicar el form.
        guardarProyecto({
            nombre: ''
        });
    }
    //mostrar el formulario.
    const onClickFormulario = () => {
        mostrarFormulario()
    }
    return ( 
        
        <Fragment>
            <button
            type='button'
            className='btn btn-block btn-primario'
            onClick={onClickFormulario}
        >
            Nuevo Proyecto
        </button>
        {
            formulario
                ?
                <form
            className='formulario-nuevo-proyecto'
            onSubmit={onSubmitProyecto}
        >
            <input
                type='text'
                className='input-text'
                placeholder='Nombre Proyecto'
                name='nombre'
                value={nombre}
                onChange={onChangeProyecto}
                
            />

            <input
                type='submit'
                className='btn btn-primario btn-block'
                value="Agregar Proyecto"
            />
        </form>
                :
                    null
        }

        { error_formulario
        ?
            <p className='mensaje error'>El nombre del proyecto es obligatorio</p>
        :
            null
        }
        
        </Fragment>
        
    );
}
 
export default NuevoProyecto;