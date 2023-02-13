import { Box } from "@mui/material"

type IconProps = {
    url: string
    style: Object
}

export const IconComponent = (props: IconProps) => {
    return (
        <Box
            component="img"
            src={props.url}
            style={props.style}
            data-testid="icon">
        </Box>
    )
}