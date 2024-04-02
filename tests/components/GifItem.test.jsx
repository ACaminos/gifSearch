import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('test GifItem', () => {
    const url = 'http://localhost/www.hola.com.ar';
    const title = 'Hola como va';

    test('Debe dar ok en recibir url y title y hacer snapshot', () => {
        const { container } = render( <GifItem url={ url } title={ title } /> );
        expect ( container ).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem url={ url } title={ title } /> );
        // screen.debug()
        // expect( screen.getByRole('img').src ).toBe( url )
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })

    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem url={ url } title={ title } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    })
});
