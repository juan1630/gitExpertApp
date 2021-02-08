import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import {GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


      const { data: images, loading }  =  useFetchGif( category );
      // console.log( data );
      // console.log( loading );

      { loading && <p>loading </p> }

        return (
          <div className="" >
            <h3> { category } </h3>
                <div className="card-grid" >
                  {
                    images.map( (img) =>(

                      <GifGridItem key={img.id} {...img} />
                    )
                    )
                  }
                </div>
            </div>)
        }

        // { loading ? 'Cargando...' : 'Fin de la carga' }
