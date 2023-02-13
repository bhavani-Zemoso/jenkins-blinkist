import {render, screen} from '@testing-library/react';
import { IconComponent } from './Icons';

test('renders Icon' , () => {
    render(
        <IconComponent url='https://i.ibb.co/GsFCTcQ/Vector-5.png' style={{width: '20px', height: '16px'}} />
    );
    const linkElement = screen.getByTestId("icon");
    expect(linkElement).toBeInTheDocument();
})