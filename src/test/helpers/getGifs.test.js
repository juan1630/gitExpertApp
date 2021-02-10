import { getsGifs } from '../../helpers/getGifs';

describe('Pruebas con los gifs', ()=> {

    test('Debe de traer 20 elementos',  async()=> {
          const gifs = await getsGifs('Batman');
          expect(  gifs.length ).toBe(20);
    });



});
