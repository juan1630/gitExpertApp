import React from 'react';
import { shallow  } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componete <GifGridItem/>', () => {
    test('Debe de mostrar el componete', ()=> {
      const wrapper = shallow(<GifGridItem/>);
      expect( wrapper ).toMatchSnapshot();
    });
});
