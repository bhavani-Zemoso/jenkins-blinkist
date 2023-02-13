import { Grid } from "@mui/material"
import { theme } from "../../../Themes/theme"
import { IconComponent } from "../../atoms/Icons/Icons"
import { TypographyComponent } from "../../atoms/Typography/Typography"

type NavIconProps = {
    url: string,
    label: string,
}
export const NavIconComponent = (props: NavIconProps) => {
    return(
        <Grid container data-testid="nav-components">
            <Grid item>
                <IconComponent url={props.url} style={{height: '20px', marginRight: '12px'}} />            
            </Grid>
            <Grid item>
                <TypographyComponent variant="body2" text={props.label} style={{height: '20px', color: theme.palette.textcolor.light, lineHeight: '20px', }} />
            </Grid>
    </Grid>
    )
    
}