import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';

const GitExpertApp = () => {

  // const categories = ;
  const [  categories , setCategories] = useState(['One punch', 'Samuria x', 'Drgaon ball', 'Attack on titan']);
  // const handelAdd = () => {
  //     // console.log("Add");
  //     setCategories([ 'One Piece', ...categories]);
  //     // asi se agrega un elemento al arreglo
  // }
    return (
      <>
      <h2> GitApp </h2>
    <AddCategory/>
    {/* <button onClick={ handelAdd}  > Agregar </button> */}

    <h1>
        {
          categories.map( (category) => {
            return <li  key={  category} > {category} </li>
          })
        }
      </h1>
      <hr/>
      </>
  );
}




export default GitExpertApp;
