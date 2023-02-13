
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ExtendedNav } from './ExtendedNav';

describe('Molecules/ExtendedNav', () => {
    test('are 18 labels rendering', () => {
        render(
            <BrowserRouter>
                <ExtendedNav />
            </BrowserRouter>
        )

        const navItem = screen.getAllByTestId('nav-components');

        expect(navItem).toHaveLength(18);

    })
})