import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    //state para iniciar sesión.
    const [ usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    });
    //extraer información de usuario.
    const {email, password} = usuario;
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
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesión'
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;