import React, { useState } from 'react';



export const AddCategory = () => {

  const [inputValue, setInputValue] =useState('Hola mundo');
  const handleValue = (e) => {

      setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    console.log(e );
    e.preventDefault();

  }

  return(
    <form   onSubmit={ handleSubmit }  >

      <input type="text"
      className="input"
      value={inputValue}
      onChange={  handleValue }
      />
      </form>
  )
};
