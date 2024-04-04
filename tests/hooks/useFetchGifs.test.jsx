import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) )
        // console.log( result )
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy()

    })

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 ) //Esto quiere decir : Esperar hasta que result.images sea mayor que 0
        );

        // console.log( result )

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy()

    })
})