import { Box } from "@mui/material"
import logo from '../../../assets/e60c1b 1.png'

type LogoProps = {
    style: Object
}

export const LogoComponent = (props: LogoProps) => {
    return (
        <Box
            component="img"
            src={logo}
            style={props.style}
            data-testid="logo">
        </Box>
    )
}