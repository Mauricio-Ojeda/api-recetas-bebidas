import React from 'react'
import Header from './components/Header.js';
import Form from './components/Form';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext.js';
import RecetasProvider from './context/RecetasContext.js';

function App() {
  

  return ( 


    <CategoriasProvider>
      <RecetasProvider>
          <Header/>

          <div className=" container mt-5">
          	<div className="row">
          		<Form/>
          	</div>
          	<ListaRecetas
              
            />
          </div>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App
