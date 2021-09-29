import React, {useContext} from 'react';
import Receta from './Receta'
import { RecetasContext } from '../context/RecetasContext';
import Error from './Error';


const ListaRecetas = () => {

	//extraer recetas
	const { recetas } = useContext(RecetasContext);

	if( recetas === undefined ){ return <Error mensaje= 'No se pudo encontrar el ingrediente. Verifique que este bien escrito'/>};

		
	return (
		<div className="row mt-5">
			{recetas.map(receta => (
				<Receta
					key={receta.idDrink}
					receta={receta}
				/>
			 ))}
		</div>

	)
}

export default ListaRecetas