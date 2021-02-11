// los use demuestran que es un hook
// los hooks son funciones
//


import  {getsGifs}  from '../helpers/getGifs'
import { useState, useEffect } from 'react';

// el hook si puede tener el estado
export const useFetchGif = ( category ) => {

  const [state, setState] = useState({
    data:[],
    loading:true
  });


  useEffect( ()=> {
        getsGifs(category)
        .then(  imgs => {


          setState({
              data: imgs,
              loading:false
          });

        })
  }, [ category ]);

  return state;
}
