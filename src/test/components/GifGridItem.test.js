import React from 'react';
import { shallow  } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componete <GifGridItem/>', () => {


  const url = 'http://localhost/algo.jpg';
  const title = 'Un titulo';

  const wrapper = shallow(<GifGridItem  url={url} title={ title } />);



    test('Debe de mostrar el componete', ()=> {

      expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un parrafo con el texto', ()=> {
          const p = wrapper.find('p');
          expect( p.text().trim() ).toBe( title );
    });

    test('Debe de regresar una imagen igual al de los props.' , ()=> {
        const img =    wrapper.find('img');
        // console.log( img.props().src );
        expect(  img.props().src ).toBe( url );
    });

    test('Debe de tener la class animate__animated ' , ()=> {
        const div = wrapper.find('div');
        const classesAnimated =  div.prop('className');


        expect( classesAnimated.includes('animate__animated')  ).toBe(true)
    });

});
