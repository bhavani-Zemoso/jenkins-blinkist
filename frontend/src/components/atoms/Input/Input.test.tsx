
import React from 'react';
import {render, screen} from '@testing-library/react';

import { InputBar } from './Input';

describe('Atoms', () => {
    test('renders input field', () => {
        render(<InputBar placeholder={"Search by book or author"} style={{color: '#747575',width: '329px'}}/>);

        expect(screen.getByPlaceholderText("Search by book or author")).toBeInTheDocument();
        expect(screen.queryByPlaceholderText(/Book/)).toBeNull();
    })
})