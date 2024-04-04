import { GifExpertApp } from '../src/GifExpertApp'
import { render, screen } from "@testing-library/react"

describe('test < GifExpertApp />', () => {
    test('should first', () => {
        render( <GifExpertApp /> );
        screen.debug();
    })
})