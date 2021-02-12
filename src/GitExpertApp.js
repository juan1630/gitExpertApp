import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/gifGrid';

const GitExpertApp = (  { defaultCategories } ) => {

  // const categories = ;
  const [  categories , setCategories] = useState( defaultCategories);
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
