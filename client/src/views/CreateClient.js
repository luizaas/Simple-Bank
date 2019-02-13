import React, { Component } from 'react';

const CreateClient = () => {

   return (
      <div>
         <div className='header'>
            <h2>Cadastro Cliente</h2>
         </div>

         <div className="instructions">
            <p>Insira as informaçõe do novo cliente</p>
         </div>

         <div className='formInput'>
	  <form method='POST' action='/finalizacadastro'>
	     <input type='text' placeholder='Nome' name='name'/>
         <input type='number' placeholder='Idade' name='age'/>
         <input type='text' placeholder='Endereço' name='address'/>
         <input type='text' placeholder='Conta' name='account'/>
         <input type='number'  step="0.01" placeholder='Saldo' name='balance'/>
	     <button>ENTER</button>
	  </form>
         </div>
      </div>
   )
}

export default CreateClient
