import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //state para iniciar sesión.
    const [ usuario, guardarUsuario] = useState({
        nombre:"",
        email: "",
        password: "",
        confirmar: ""
    });
    //extraer información de usuario.
    const { nombre, email, password, confirmar } = usuario;
    //función que se ejcuta cuando el usuario esté escribiendo.
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    };
    //cuando el usuario quiera iniciar sesión.
    const onSubmit = e => {
        e.preventDefault();

    };
    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu nombre'
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu email'
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu password'
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrar'
                        />
                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;