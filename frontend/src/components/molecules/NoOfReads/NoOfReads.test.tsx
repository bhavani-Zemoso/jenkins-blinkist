
import {render, screen} from '@testing-library/react'
import { NoOfReads } from './NoOfReads'

const styles = {
    marginTop: '17px', 
    marginLeft: '30px',
}

describe('Molecules/NoOfReads', () => {
    test('render component', () => {
        render(
            <NoOfReads style={styles} text={"1.9k reads"}/>
        )

        const readElement = screen.getByTestId('NoOfReads');
        expect(readElement).toBeInTheDocument();
    })
})