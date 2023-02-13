
import React from 'react';
import {render, screen} from '@testing-library/react';

import { Banner } from './Banner';

describe('Molecules/Banner' , () => {
    test('renders Banner component', () => {
        render(<Banner url={'https://i.ibb.co/XFZtZP3/exploreposter.png'}/>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('Explore Books on entrepreneurship')
        expect(screen.getByRole('img')).toBeInTheDocument();

    })
})