
import {render, screen} from '@testing-library/react'
import { Footer } from './Footer'

describe('Organisms/Footer', () => {
    test('render component', () => {
        render(
            <Footer/>
        )

        const element = screen.getAllByTestId('typography');
        expect(element).toHaveLength(19);
    })
})