import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

   return (
      <div>
         <div className='header'>
            <h2>Simple-Bank</h2>
         </div>

         <div className="instructions">
            <p>Escolha a operação que deseja realizar</p>
         </div>
         <div className="homeBtn">
            <Link to='/cadastro-cliente'><button>Cadastro Client</button></Link>
            <Link to='/extrato'><button>Extrato</button></Link>
            <Link to='/relatorio'><button>Relatório</button></Link>
            <Link to='/saldo-todos'><button>Saldo de todos os clientes</button></Link>
         </div>
      </div>
   )
}

export default Home