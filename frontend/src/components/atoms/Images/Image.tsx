import { Box } from "@mui/material"

type ImageProps = {
    url: string
}
export const ImageComponent = (props: ImageProps) => {
    return (
        <Box
            component="img"
            src={props.url}
            data-testid="image">
        </Box>
    )
}