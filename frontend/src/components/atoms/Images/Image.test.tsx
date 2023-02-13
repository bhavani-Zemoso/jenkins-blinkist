 import {screen, render} from '@testing-library/react';
 import { ImageComponent } from './Image';

 test('renders Image' , () => {
    render(
        <ImageComponent url='https://i.ibb.co/d0yvTrJ/3.png' />
    );
    const linkElement = screen.getByTestId("image");
    expect(linkElement).toBeInTheDocument();
})