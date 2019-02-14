import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

   return (
      <div>
         <div className='header'>
            <h2>Simple-Bank</h2>
         </div>

         <div className="instructions">
            <p>Ocorreu um problema..</p>
         </div>
         <div className="homeBtn">
            <Link to='/'><button>Clique aqui para retornar a pagina inicial</button></Link>
         </div>
      </div>
   )
}

export default Home