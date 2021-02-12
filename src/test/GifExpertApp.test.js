import React from 'react';
import { shallow } from 'enzyme';
// import { GitExpertApp } from '../GitExpertApp';
// import { GifGrid } from './components/gifGrid'

describe('pruebas en el GifExperApp', () => {
            test('Debe mostarse el componente', () => {
                const wrapper = shallow( <GifExpertApp/> );

                expect(wrapper).toMatchSnapshot();
            });

            test('debe de mostart una lista de categorias', () => {
                    const categories = ['attack on tittan', 'DC'];
                    const wrapper = shallow( < GifExpertApp defaultCategories = { categories }
                        />);

                        expect(wrapper).toMatchSnapshot(); expect(wrapper.find('GifGrid').length).toBe(categories.length);
                    });
            });