import React from 'react'
import Header from './components/Header.js';
import Form from './components/Form';

import CategoriasProvider from './context/CategoriasContext.js';

function App() {
  

  return (
    <CategoriasProvider>
      <Header/>

      <div className=" container mt-5">
      	<div className="row">
      		<Form/>
      	</div>
      	
      </div>
    </CategoriasProvider>
  )
}

export default App
