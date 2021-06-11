import React, { createContext, useState } from 'react';

// Crear el context

export const CategoriaContext = createContext();

// Porvider es donde se encuentra las funciones y state

const CategoriasProvider = (props) => {
    
    //crear el state del context
    const [hola, sethola] = useState('hola');

    return (

        <CategoriaContext.Provider
            value = {{
                hola, sethola
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}

export default CategoriasProvider

