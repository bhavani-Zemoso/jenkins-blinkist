import { Box, Container, Grid } from "@mui/material"
import { theme } from "../../../Themes/theme"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import { NavIconComponent } from "../NavIcon/NavIcon"
import { NavLink } from "react-router-dom";

const data = [
    {
        "icon" : "https://i.ibb.co/xFdsgFQ/Vector-4.png",
        "label": "Entepreneurship",
    },
    {
        "icon" : "https://i.ibb.co/pyYN6NS/Science.png",
        "label": "Science",
    },
    {
        "icon" : "https://i.ibb.co/GsFCTcQ/Vector-5.png",
        "label": "Economics",
    },
    {
        "icon" : "https://i.ibb.co/rQ7rshq/Vector-6.png",
        "label": "Corporate Culture",
    },
    {
        "icon" : "https://i.ibb.co/Zhdmrm1/Psychology.png",
        "label": "Psychology",
    },
    {
        "icon" : "https://i.ibb.co/PC7kKHf/Vector-18.png",
        "label": "Nature & Environment",
    },
    {
        "icon" : "https://i.ibb.co/z6TqBRT/Vector-8.png",
        "label": "Politics",
    },
    {
        "icon" : "https://i.ibb.co/4W5fDkc/Health.png",
        "label": "Health & Nutrition",
    },
    {
        "icon" : "https://i.ibb.co/cbP5cg6/History.png",
        "label": "History",
    },
    {
        "icon" : "https://i.ibb.co/n3TmkLz/Vector-16.png",
        "label": "Motivation & Inspiration",
    },
    {
        "icon" : "https://i.ibb.co/LZvvFMS/Productivity.png",
        "label": "Productivity",
    },
    {
        "icon" : "https://i.ibb.co/3h0fqB4/Vector-17.png",
        "label": "Career & Success",
    },
    {
        "icon" : "https://i.ibb.co/ZYd8G62/Marketing.png",
        "label": "Marketing & Sales",
    },
    {
        "icon" : "https://i.ibb.co/5Fw1v7d/Personal-Development.png",
        "label": "Personal Development",
    },
    {
        "icon" : "https://i.ibb.co/p4bwLGf/Communication.png",
        "label": "Communication Skills",
    },
    {
        "icon" : "https://i.ibb.co/XFRp3cj/Money.png",
        "label": "Money & Investments",
    },
    {
        "icon" : "https://i.ibb.co/RvJLxzL/Vector-7.png",
        "label": "Sex & Relationship",
    },
    {
        "icon" : "https://i.ibb.co/0FyLbXk/Education.png",
        "label": "Education",
    },
    

]

export const ExtendedNav = () => {
    return(
        <Box sx={{width: '1440px', height: '420px', backgroundColor: theme.palette.backgroundcolor.main}}>
        <Container sx={{width:'940px', marginLeft: '250px', borderBottom: '1px solid #042330'}}>
            <Grid container columnSpacing={theme.spacing(7)}>
                <Grid item sx={{marginTop: '30px', marginBottom: '24px',}}>
                    <TypographyComponent text={"Explore by category"} variant="body2" style={{width: '154px', height:'20px', color: '#116BE9', fontWeight: '500'}} />
                </Grid>
                <Grid item sx={{marginTop: '30px', marginBottom: '24px',}}>
                    <TypographyComponent text={"See recently added titles"} variant="body2" style={{width: '188px', height: '20px', color: theme.palette.textcolor.light, fontWeight: '500'}} />
                </Grid>
                <Grid item sx={{marginTop: '30px', marginBottom: '24px',}}>
                    <TypographyComponent text={"See popular titles"} variant="body2" style={{width:'132px', height: '20px', color: theme.palette.textcolor.light, fontWeight: '500'}} />
                </Grid>
            </Grid>
        </Container>
        <Container sx={{width:'940px', marginLeft: '250px', marginTop: '32px', marginBottom: '32px'}}>
            <Grid container>
            {
                data.map((item) => {
                    return (
                        <Grid item xs={4} sm={4} md={4} sx={{marginBottom:'28px'}} >
                            <NavLink to="/EntrepreneurshipPage" style={{textDecoration: 'none'}}>
                                <NavIconComponent url={item.icon} label={item.label}/>
                            </NavLink>
                        </Grid>
                    )
                })
            }
            </Grid>
        </Container>
    </Box>
    )
    
}