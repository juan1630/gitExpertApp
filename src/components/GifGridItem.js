import React from 'react';


export const GifGridItem = ( {id, url, title} ) => {

        console.log(id, title, url);
        // console.log( props );
        return ( <div>
          <img src={url} alt={title} />
          <p> { title } </p>
         </div>)
        }
