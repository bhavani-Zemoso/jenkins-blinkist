import {render, screen} from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

test('renders progress bar', () => {
    render(
        <ProgressBar value={20} />
    );
    const linkElement = screen.getByTestId("ProgressBar");
    expect(linkElement).toBeInTheDocument();
});