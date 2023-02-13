import { Box, Grid, Stack} from "@mui/material"
import { theme } from "../../../Themes/theme"
import { LogoComponent } from "../../atoms/Logo/Logo"
import { TypographyComponent } from "../../atoms/Typography/Typography"

const typographyStyle = {
    color: theme.palette.secondary.main,
}

const copyRightStyle = {
    width:'546px', 
    height:'22px', 
    color: theme.palette.textcolor.light,
    display: 'inline',
    marginRight: theme.spacing(2),
}

const data = [
    {
        'title': 'Editorial',
        'list': [
            'Book lists',
            'What is Nonfiction?',
            'What to read next?',
            'Benefits of reading'
        ],
    },
    {
        'title': 'Useful links',
        'list': [
            'Pricing',
            'Blinkist business',
            'Gift cards',
            'Blinkist magazine',
            'Contact & help'
        ]
    },
    {
        'title': 'Company',
        'list': [
            'About',
            'Careers',
            'Partners',
            'Code of Conduct'
        ]
    }

]

export const Footer = () => {
    return (
        <Box sx={{height: '370px', width:'1440px', backgroundColor: theme.palette.backgroundcolor.main, top: '1888px', padding: '24px 24px 24px 244px'}} >
            <Grid container>
                <Grid item>
                    <LogoComponent style={{width: '99.1px', height: '24px', marginBottom: '32px'}}/>
                    <Box sx={{width: '378px', height: '64px', top: '56px'}}>
                        <TypographyComponent text={"Big ideas in small packages"} variant={"subtitle1"} style={typographyStyle} />
                        <TypographyComponent text={"Start learning now"} variant={"subtitle1"} style={typographyStyle} />
                    </Box>
                </Grid>
                {
                    data.map((currentData) => {
                        return (
                        <Grid item xs={2}>
                            <TypographyComponent variant="body1" style={{width:'100px', height: '24px', color: theme.palette.textcolor.main, marginBottom: theme.spacing(2)}} text={currentData.title} /> 
                            {
                                currentData.list.map((item) => {
                                    return(
                                        <TypographyComponent variant="body2" style={{width:'214px', height:'24px', color: theme.palette.textcolor.light, marginBottom: theme.spacing(2)}} text={item}  />
                                    )
                                })
                            }
                        </Grid>    
                    )   
                })
                }
                     
            </Grid>
            <Grid container sx={{marginTop: '110px'}}>
                <Grid item>
                <TypographyComponent variant="caption1" style={copyRightStyle} text={"© Blinkist 2021 Sitemap\u00A0 \u00A0|\u00A0 \u00A0 Imprint\u00A0 \u00A0|\u00A0 \u00A0 Terms of Service \u00A0 \u00A0|\u00A0 \u00A0 Privacy Policies"}/>
                </Grid>
            </Grid>
            
        </Box>
    )
}