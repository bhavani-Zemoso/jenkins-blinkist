import { Box, Grid } from "@mui/material"
import { theme } from "../../../Themes/theme"
import { ImageComponent } from "../../atoms/Images/Image"
import { TypographyComponent } from "../../atoms/Typography/Typography"

type BannerProps = {
    url: string,
}
export const Banner = (props: BannerProps) => {

    const {url} = props;
    
    return(
        <Box sx={{
            width: '912px',
            height: '264px',
            backgroundColor: theme.palette.backgroundcolor.main,
            marginTop: '32px',
            marginLeft: '264px',
            marginBottom: '40px'
        }}>
            <Grid container>
                <Grid item sx={{marginTop: theme.spacing(7), marginLeft: theme.spacing(7), marginRight: theme.spacing(7)}} xs={6}>
                    <Grid container>
                        <Grid item>
                        <TypographyComponent variant="h1" text="Explore Books on entrepreneurship" style={{width:'319px', height: '90px',marginBottom: theme.spacing(3), color:theme.palette.textcolor.main}} />
                        </Grid>
                        <Grid item>
                        <TypographyComponent variant="subtitle3" text="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start." style={{width: '461px', height: '69px', color: theme.palette.textcolor.light}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{marginLeft: theme.spacing(7)}}>
                    <ImageComponent url={url} />
                </Grid>
            </Grid>

        </Box>
    )

}