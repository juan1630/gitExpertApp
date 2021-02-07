import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

        const [images, setImages] = useState([]);

        // solo se ejecuta una vez la funcinm como el onInit
        useEffect(() => {
            getsGifs();
        }, []);

        const getsGifs = async() => {
            const url = 'https://api.giphy.com/v1/gifs/search?q=attack+on+titan&limit=10&api_key=eEPDA03j1IvzhS3hAAbeGHhOeE48k0vN';
            const resp = await fetch(url);
            const { data } = await resp.json();

// es el return de la promesa
            const gifs = data.map(img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            });

            // console.log( gifs );
            setImages(gifs);

        }
        return ( <div >
                <h3> { category } </h3>

                {
                    images.map( img => (<GifGridItem key={ img.id }  { ...img } />))
                    }
                        </div>
                    )
                }
