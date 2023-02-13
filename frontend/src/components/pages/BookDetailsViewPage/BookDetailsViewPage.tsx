import { Box, Button, Container, Grid, styled } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { theme } from "../../../Themes/theme"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import { TimeToRead } from "../../molecules/TimeToRead/TimeToRead"
import { Header } from "../../organisms/Header/Header"
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import { ImageComponent } from "../../atoms/Images/Image"
import { useNavigate } from "react-router-dom";
import { TabPanelComponent } from "../../organisms/Tab/TabPanel"
const axios = require('axios');

const StyledReadButton =  styled(Button)({
    textTransform: 'none',
    color: theme.palette.primary.main,
    borderColor: theme.palette.grey[200],
    width: '110px',
    
})

const StyledFinishedButton = styled(Button)({
    textTransform: 'none',
    color: theme.palette.textcolor.main,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
        color: theme.palette.textcolor.main,
        backgroundColor: theme.palette.primary.dark,
      },
})

const KindleButton = styled(Button)({
    textTransform: 'none',
    color: theme.palette.textcolor.light,
    height: '20px',
    marginTop: '10px'
})

const text = "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."

const tabData = [
    {
        "label": "Synopsis",
        "value": "Synopsis",
    },
    {
        "label": "Who is it for?",
        "value": "Who is it for?",
    },
    {
        "label": "About the author",
        "value": "About the author",
    }
]

export const BookDetailsViewPage = () => {
    let navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState<any>([]);

    const [currentState, setCurrentState] = useState(tabData[0].value);
     const handleState = (state:string) => {
         setCurrentState(state);
     }
    

    useEffect(() => {
        fetch(`http://localhost:8000/books/${bookId}`)
        .then(res => res.json())
        .then(data => setBook(data))
    },[]);

    const [readStatus, setReadStatus] = useState<string>(book.readStatus);

    const handleReadClick = async () => {
        if(readStatus !== 'Currently reading')
        {
            book.readStatus = "Currently reading";
            book.progress=40;
            const res = await axios.put(`http://localhost:8000/books/${bookId}`, book)

            console.log(res);
        }

        navigate("/");
    }

    const handleFinishedClick = async () => {
        if(readStatus !== 'Finished')
        {
            book.readStatus = "Finished";
            book.progress = 100;
            const res = await axios.put(`http://localhost:8000/books/${bookId}`, book)

            console.log(res);
        }
        navigate("/", {state: {value: 'Finished'}});

    }

    return(
        <Box>
        <Box sx={{marginLeft: '264px', width: '1000px', marginBottom: '177px'}}>
            <Grid container columnSpacing={theme.spacing(7)}>
                <Grid item>
                    <TypographyComponent variant={"body2"} text={"Get the key ideas from"} style={{width: '168px', height: '20px', marginTop: '60px', color: theme.palette.textcolor.main}} />
                    <TypographyComponent variant={"h1"} text={book.name} style={{width:'496px', height: '45px', marginTop: '40px',marginBottom: '24px', color: theme.palette.textcolor.main}} />
                    <TypographyComponent variant= {"subtitle5"} text={"Turning Your Business into an Enduring Great Company"} style={{width: '509px', height: '25px', color: theme.palette.textcolor.main}} />
                    <TypographyComponent variant={"body2"} text={`By ${book.author}`} style={{height: '20px',marginTop: '24px', color: theme.palette.textcolor.light}} />
                    <TimeToRead text={book.timeToRead} style={{marginTop: '19px'}}/>
                    <Grid container sx={{marginTop: '80px'}} columnSpacing={theme.spacing(4)}>
                        <Grid item>
                            <StyledReadButton variant="outlined" onClick={handleReadClick}>
                                Read now
                            </StyledReadButton>
                        </Grid>
                        <Grid item>
                        <StyledFinishedButton variant="contained" onClick={handleFinishedClick}>
                            Finished Reading
                        </StyledFinishedButton>
                        </Grid>
                        <Grid item>
                            <KindleButton variant="text" endIcon={<ArrowForwardSharpIcon />}>
                                Send to Kindle
                            </KindleButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{marginTop: '120px',marginLeft: '60px',width: '304px', height: '304px'}}>
                    <ImageComponent url={book.image} />
                </Grid>
            </Grid>
            <Container sx={{paddingBottom: '80px !important', borderBottom: '1px solid #E1ECFC', paddingLeft: '0px !important', marginTop: '50px'}}>
                <TabPanelComponent style={{width: '600px'}} stateHandler={handleState} tabData={tabData} />
                <TypographyComponent style={{width: '600px', height: '100px', lineHeight: '20px', color: theme.palette.textcolor.main, marginTop: '20px'}} text={text} variant="body2" />
            </Container>
        </Box>
        
        </Box>
    )
}
