import React from 'react';
import { shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory',  ()=> {


  const setCategories = jest.fn();

  let wrapper;

  beforeEach(()=> {
    jest.clearAllMocks();
    //limpia los mocks
    wrapper= shallow( <AddCategory  setCategories={setCategories} />  );
  })


    test('Debe de mostrar el componente', ()=> {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', ()=> {
        const input = wrapper.find('input');
        // console.log( input );
        const value = "Algo";
        // mandamos el valor por medio de un json
        input.simulate('change', { target: { value } });

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( value)
    });


    test('No debe de hacer el post del formulario', ()=> {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // se ejectu la funcion
        expect( setCategories ).not.toHaveBeenCalled();

    });
});
