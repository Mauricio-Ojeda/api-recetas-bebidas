import React,{useState} from 'react'
import { CategoriaContext } from '../context/CategoriasContext'

const Form = () => {

	// use context
	const {categorys} = React.useContext(CategoriaContext);

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

	return (
		
			<form 
				className= " col-12"
				onSubmit=""
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