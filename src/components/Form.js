import React,{useState, useContext} from 'react'
import { CategoriaContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Form = () => {

	// use context
	const {categorys} = useContext(CategoriaContext);
	const {setSearch, setConsultar} = useContext(RecetasContext);

	const [dataForm, setdataForm] = useState({
		name: '',
		category: ''
	})

	// handle changes form

	const handleChange = e => {
		setdataForm({
			...dataForm,
			[e.target.name] : e.target.value
		})
	}

	// handle Submit

	const handleSubmit = e => {

		e.preventDefault();

		setSearch(dataForm);
		setConsultar(true);
	}

	return (
		
			<form 
				className= " col-12"
				onSubmit={handleSubmit}
			>
				<fieldset className="text-center">
					<legend className="font-weight-bold">Busca Bebidas por Categorias o Ingredientes</legend>
				</fieldset>

				<div className="row mt-5">
					<div className="col-md-4 mt-3">
						<input 
							name="name"
							className="form-control"
							type="text"
							placeholder="Buscar por Ingredientes"
							onChange={handleChange}
						/>
					</div>
					<div className="col-md-4 mt-3">
						<select
							className="form-control"
							name="category"
							onChange={handleChange}
						>
							<option value=""> Selecciona una Categoria </option>
							{categorys.map((category, index) =>( <option key={index} value={category.strCategory}>{category.strCategory}</option>))}
						</select>
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