import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

// se debe de dejar elstrig vacio
  const [inputValue, setInputValue] =useState('');

  const handleValue = (e) => {

      setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    // console.log(e );
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
            // se previene que se recargue la pagina
      setCategories( cats => [inputValue, ...cats] );
      // recibimso por defecto los valores de la catgoria
      setInputValue('');
      }


  }

  return(

    // el fargment se quita si hay otro agrupador
    <form   onSubmit={ handleSubmit }  >

      <input type="text"
      className="input"
      value={inputValue}
      onChange={  handleValue }
      />
      </form>
  )
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
