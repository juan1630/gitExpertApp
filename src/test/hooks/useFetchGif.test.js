import { GifGrid } from '../../components/gifGrid';
import { shallow} from 'enzyme';
import React from 'react';

import { useFetchGif } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif')


describe('Pruebas del useFetchGif', () => {


  let wrapper;
  const category = "Zelda";

  test('Debe de hacer match con el snapshot', () => {

    // retorna la infomacio del componente
      useFetchGif.mockReturnValue({
        data:[],
        loading:true
      });

      wrapper = shallow(<GifGrid  category={category} /> );
        expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostart items cuando se carguen las imagenes', () => {
        // mock fingue que se trajo la data del servicio


        const gifs = [{
          id:'ABC',
          url:'https://localhost:3200/images/photo.jpg',
          title:'algo jeje'
        }]

        useFetchGif.mockReturnValue({
          data:gifs,
          loading:false
        });



        wrapper = shallow(<GifGrid  category={category} /> );


        expect( wrapper ).toMatchSnapshot();
  });
});
