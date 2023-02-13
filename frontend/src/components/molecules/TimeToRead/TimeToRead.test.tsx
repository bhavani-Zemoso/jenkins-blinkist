

import {render, screen} from '@testing-library/react'
import { TimeToRead } from './TimeToRead'

const styles = {
    marginTop: '17px', 
    marginLeft: '16px', 
    width: '115px'
}

describe('Molecules/TimeToRead', () => {
    test('render component', () => {
        render(
            <TimeToRead style={styles} text={"13-minute read"}/>
        )

        const timeElement = screen.getByTestId('TimeToRead');
        expect(timeElement).toBeInTheDocument();
    })
})