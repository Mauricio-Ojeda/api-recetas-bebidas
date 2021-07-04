import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';


 
export const ModalContext = createContext();

const ModalProvider = ( props ) => {

   

    // state del provider
    const [idReceta, setIdReceta] = useState(null);
    const [ingredientes, setReceta] = useState({})

    // call API Lookup full cocktail details by id

    useEffect(() => {
        const ObtenerIngredientes = async () => {
            if(!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            
            const response = await axios.get(url);
            
            setReceta(response.data.drinks[0]);
             
        }
        ObtenerIngredientes();
    }, [idReceta])

    return (
        <ModalContext.Provider
            value={{
                ingredientes,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider
