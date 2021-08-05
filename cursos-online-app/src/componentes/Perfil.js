import React, {useEffect, useState} from 'react';
import axios from 'axios';
function Perfil(props)
{
    const [paises, obtenerPaises] = useState([]);// array y controlador
    const [status, cambiarStatus] = useState(false); // variable bool y controlador

    useEffect( () =>
    {
        axios.get('https://restcountries.eu/rest/v2/all') // usamos axios para controlar las peticiones
            .then( resultado => {
                obtenerPaises(resultado.data);
                cambiarStatus(true);
            })
            .catch(error => {
                cambiarStatus(true);
            })
    }, [] // sii esta esto vacio solo se ejecutara una vez
    )
    if (status)
    {
        return (
            <ul>
                {paises.map((pais, indice) => //map es un loop asi que imprimiera todo lo que haya en paises
                    <li key={indice}>{pais.name}</li>
                )}
            </ul>

        );
    }
    else
    {
        return(<h1>Cargando valores...</h1>)
    }
}


export default Perfil;