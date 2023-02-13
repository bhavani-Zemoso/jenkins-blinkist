
import {screen, render} from '@testing-library/react';
import { LogoComponent } from './Logo';

test('Renders logo', () => {
    render(
        <LogoComponent style={{width: '124.09px',height: '26px'}} />
    )

    const linkElement = screen.getByTestId("logo");
    expect(linkElement).toBeInTheDocument();
})