import React,{useState, useContext} from 'react'
import { CategoriaContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
import Error from './Error';

const Form = () => {

	// use context
	const {categorys} = useContext(CategoriaContext);
	const {setSearch, setConsultar, ingredientesPermitidos} = useContext(RecetasContext);
	
	// state
	const [error, setError] = useState(false);
	const [mensaje, setMensaje] = useState('');

	const [dataForm, setdataForm] = useState({
		name: '',
		category: ''
	})

	// destructuring dataForm
	const { name, category } = dataForm;

	// handle changes form

	const handleChange = e => {
		setdataForm({
			...dataForm,
			[e.target.name] : e.target.value
		})
	}

	// handle Submit

	const handleSubmit = e => {

		const listIngredientesPermitidos = async() => { 
			if(ingredientesPermitidos){   
				return ingredientesPermitidos.map( ingrediente => ingrediente.strIngredient1 );
			}
		}
		listIngredientesPermitidos();
		

		e.preventDefault();
		
		// Validation form

		if ( name.trim() === '' && category.trim() === '') {
			
			setError(true);
			setMensaje( 'Debes Completar Alguno de los Campos' );
			return;			
		}
		
		if ( ( name.lenght > 0 ) && ( category.length > 0 ) ) {
			
			setError(true);
			setMensaje( 'Debes compoletar solo un campo' );
			return;			
		}

		// upDate Error state
		setError(false);

				
		setSearch(dataForm);
		setConsultar(true);
	}

	return (
		
			<form 
				className= " col-12"
				onSubmit={handleSubmit}
			>
				<fieldset className="text-center">
					<legend className="font-weight-bold">Busca Bebidas por Categorias o Ingredientes en Ingles</legend>
					{ ( error ) && <Error mensaje={ mensaje } /> }
				</fieldset>

				<div className="row mt-5">
					<div className="col-md-4 mt-3">
						{ ( error ) ? 
							<input 
								name="name"
								className="form-control errorInput"
								type="text"
								placeholder="Buscar por Ingredientes"
								onChange={handleChange}
							/> :
								<input 
									name="name"
									className="form-control"
									type="text"
									placeholder="Buscar por Ingredientes"
									onChange={handleChange}
								/>
						}
					</div>
					<div className="col-md-4 mt-3">
						{ ( error ) ? 
							<select
								className="form-control errorInput"
								name="category"
								onChange={handleChange}
							>
								<option value=""> Selecciona una Categoria </option>
								{categorys.map((category, index) =>( <option key={index} value={category.strCategory}>{category.strCategory}</option>))}
							</select> :
							
							<select
								className="form-control"
								name="category"
								onChange={handleChange}
							>
								<option value=""> Selecciona una Categoria </option>
								{categorys.map((category, index) =>( <option key={index} value={category.strCategory}>{category.strCategory}</option>))}
							</select>
						}
					</div>

					<div className="col-md-4 mt-3">
						<input 
							type="submit"
							className="btn btn-block btn-primary"
							value="Buscar"
						/>	
					</div>
					
				</div>

			</form>
		
	)
}

export default Form
