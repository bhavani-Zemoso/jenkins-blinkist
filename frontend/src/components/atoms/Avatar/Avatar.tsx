import { Stack, Avatar } from "@mui/material";

type AvatarProps = {
    children?: React.ReactNode,
}


export const AvatarComponent = (props: AvatarProps) => {
    const {children} = props;

    return(
        <Stack>
    
                <Avatar sx={{bgcolor: '#69A6E3'}} data-testid="Avatar">
                    {children}
                </Avatar>
        </Stack>
    )
}