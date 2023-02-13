import { Typography, ThemeProvider } from "@mui/material"

import { theme } from "../../../Themes/theme"


export const TypographyComponent = (props: any) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant={props.variant} style={props.style} data-testid="typography">
            {props.text}
        </Typography>
        </ThemeProvider>

    )
}