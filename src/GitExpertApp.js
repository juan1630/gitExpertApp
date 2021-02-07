import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/gifGrid';

const GitExpertApp = () => {

  // const categories = ;
  const [  categories , setCategories] = useState(['Attack on titan']);
  // const handelAdd = () => {
  //     // console.log("Add");

  //     // asi se agrega un elemento al arreglo
  // }
    return (
      <>
      <h2> GitApp </h2>

    <AddCategory setCategories={ setCategories } />
    {/* <button onClick={ handelAdd}  > Agregar </button> */}
      {/*  pasamos la fiuncion por parametro*/}
    <h1>
        {
          categories.map( (category) => <GifGrid key={category} category={category} />  )
        }
      </h1>
      <hr/>
      </>
  );
}




export default GitExpertApp;
