import React from 'react'

const Form = () => {
	return (
		
			<form 
				className= " col-12"
				onSubmit=""
			>
				<fieldset className="text-center">
					<legend>Busca Bebidas por Categorias o Ingredientes</legend>
				</fieldset>

				<div className="row mt-5">
					<div className="col-md-4 mt-3">
						<input 
							name="nombre"
							className="form-control"
							type="text"
							placeholder="Buscar por Ingredientes"
						/>
					</div>
					<div className="col-md-4 mt-3">
						<select
							className="form-control"
							name="categoria"
						>
							<option value=""> Selecciona una Categoria </option>

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