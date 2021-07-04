import React from 'react'
import Header from './components/Header.js';
import Form from './components/Form';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriasContext.js';
import RecetasProvider from './context/RecetasContext.js';
import ModalProvider from './context/ModalContext.js';
function App() {
  

  return (  


    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header/>

          <div className=" container mt-5">
          	<div className="row">
          		<Form/>
          	</div>
          	<ListaRecetas
              
            />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App
