import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

	const [consultar, setConsultar] = useState(false)
	const [recetas, setRecetas] = useState([])
	const [search, setSearch] = useState({
		name:'',
		category:''
	})

	const { name, category } = search

	useEffect(() => {

		if(consultar){
			const obtenerRecetas = async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
				const response = await axios.get(url);
				setRecetas(response.data.drinks);
				
			}

			obtenerRecetas();
			setConsultar(false);
		}

		

	}, [search, consultar, setConsultar, setRecetas])

	return (

			<RecetasContext.Provider

				value = {{
						recetas,
						setSearch,
						setConsultar
					}}
			>

				{props.children}

			</RecetasContext.Provider>	

		);
}


export default RecetasProvider;