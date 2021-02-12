import { useFetchGif } from '../../hooks/useFetchGif';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetch', () => {



    test('Debe de mostrar el estado de la aplicación', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('attack on titan'));
        // console.log(result);
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });


    test('Debe de retornar el arreglo de img y el loading en false', async() => {


        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('attack on titan'));

        const { data, loading } = result.current;
        // console.log(data);
        await waitForNextUpdate();

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });

});