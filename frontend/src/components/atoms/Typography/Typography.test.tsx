
import {screen, render} from '@testing-library/react';
import { theme } from '../../../Themes/theme';
import { TypographyComponent } from './Typography';

test('Renders typography', () => {
    render(
        <TypographyComponent variant="caption1" text="13-minute read" style={{color: theme.palette.textcolor.light}} />
    )

    const typographyElement = screen.getByTestId('typography');
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent('13-minute read');
    expect(typographyElement).toBeVisible();
})