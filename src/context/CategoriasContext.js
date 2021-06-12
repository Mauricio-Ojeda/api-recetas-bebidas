import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context

export const CategoriaContext = createContext();

// Porvider es donde se encuentra las funciones y state

const CategoriasProvider = (props) => {
    
    //crear el state del context
    const [categorys, setCategorys] = useState([]);

    // Call API Categorys

    useEffect(() => {
        const consultingAPI = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const response = await axios.get(url);
            setCategorys(response.data.drinks);
        }
        consultingAPI();    
        
    }, [setCategorys]);


    return (

        <CategoriaContext.Provider
            value = {{
                categorys
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}

export default CategoriasProvider

