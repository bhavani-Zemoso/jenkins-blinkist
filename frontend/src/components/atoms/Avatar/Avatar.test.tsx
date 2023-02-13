import {render, screen} from '@testing-library/react'
import { AvatarComponent } from './Avatar'

test('renders Avatar' , () => {
    render(
        <AvatarComponent>BS</AvatarComponent>
    );
    const linkElement = screen.getByTestId("Avatar");
    expect(linkElement).toBeInTheDocument();
})