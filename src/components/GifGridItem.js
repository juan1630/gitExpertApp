import React from 'react';


export const GifGridItem = ( {id, url, title} ) => {

        // console.log( props );
        return ( <div className="card animate__animated animate__bounce animate__delay-5s"  >
          <img src={url} alt={title} />
          <p> { title } </p>
         </div>)
        }
