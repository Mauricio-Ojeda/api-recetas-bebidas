import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';




export const RecetasContext = createContext();

const RecetasProvider = (props) => {

	const [consultar, setConsultar] = useState(false);
	const [ingredientesPermitidos, setIngredientesPermitidos] = useState([]);
	const [recetas, setRecetas] = useState([])
	const [search, setSearch] = useState({
		name:'',
		category:''
	})



	const { name, category } = search;
	

	

	useEffect(() => {

		if(consultar){
			let url ='';
			const obtenerRecetas = async () => {
				
				if(!category){
					url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
				} else {
					url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
				}	
				
				 await axios.get(url)				
									.then(response => setRecetas(response.data.drinks))
									
				
			}
			const listIngredientesPermitidos = async () => {
				const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
				const response = await axios.get(url);
				setIngredientesPermitidos(response.data.drinks);
				
				
			}

		

			obtenerRecetas();
			listIngredientesPermitidos();
			setConsultar(false);
		}

		

	}, [category, name, consultar, setConsultar, setRecetas, setIngredientesPermitidos])

	
	 
	return (

			<RecetasContext.Provider

				value = {{
						recetas,
						ingredientesPermitidos,
						search,
						setSearch,
						setConsultar,
						
					}}
			>

				{props.children}

			</RecetasContext.Provider>	

		);
}


export default RecetasProvider;