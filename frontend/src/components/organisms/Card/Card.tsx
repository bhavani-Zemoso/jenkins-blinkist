
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Paper, styled} from "@mui/material"
import { ThemeProvider } from "@mui/material"
import { theme } from "../../../Themes/theme"
import { ProgressBar } from "../../atoms/ProgressBar/ProgressBar"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import { NoOfReads } from "../../molecules/NoOfReads/NoOfReads"
import { TimeToRead } from "../../molecules/TimeToRead/TimeToRead"
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type CardDataProps = {
    image: string,
    bookName: string,
    author: string,
    time: string,
    noOfReads: string,
    readStatus: string,
    page: string,
    progress: number,
}

const StyledAddToLibrary = styled(Button)({
  width: '284px',
  height: '52px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: theme.palette.secondary.main,
  backgroundColor: '#fff',
  textTransform: 'none',
  marginBottom: '0px',
  marginTop: '6px',
  '&:hover': {
    color: '#fff',
  backgroundColor: theme.palette.secondary.main,
  },
})

const bookNameStyle={
    color: theme.palette.textcolor.main,
    width: '250px',
    height: '23px',
    marginTop: '23px',
    marginLeft: '16px',
    fontWeight: '700'
}

const authorNameStyle= {
    color: theme.palette.textcolor.light,
    width:'258px',
    height:'20px',
    marginTop: '16px',
    paddingLeft:'16px',
    fontWeight: '500'
}


export const CardComponent = (props: CardDataProps, ...prop: any) => {

  const {image, bookName, author, time, noOfReads, readStatus, page, progress} = props;
  
  const buttonType = () => {
    if(page === 'Library')
    {
      if(readStatus === 'Currently reading')
      {
        return (
          <>
          <Grid item >
            <Button variant="text" sx={{width: '62px', height: '20px', margin: '15px 111px 12px 111px', color: theme.palette.secondary.main, fontWeight: '500', lineHeight: '20px', textTransform: 'none', fontSize: '16px'}}>Finished</Button>
          </Grid>

          <ProgressBar value={progress}/>
          </>
        )
      }
      else if(readStatus === 'Finished')
      {
        return(
          <>
          <Grid item >
            <Button variant="text" sx={{width: '100px', height: '20px', margin: '15px 111px 12px 90px', color: theme.palette.secondary.main, fontWeight: '500', lineHeight: '20px', textTransform: 'none', fontSize: '16px'}}>Read again</Button>
          </Grid>

          <ProgressBar value={progress}/>
          </>
        )
      }
    }
    else if(page === 'AllBooks')
    {
      if(readStatus === "")
      {
        return(
          <>
          <Grid item>
          <StyledAddToLibrary variant="contained" startIcon={<AddIcon />}>Add to library</StyledAddToLibrary>   
          </Grid>  
          </>
        )

      }
      else
      {
        return(
          <>
          <Grid item>
            <IconButton style={{float: 'right'}}>
              <MoreHorizIcon/>
            </IconButton>
          </Grid>
          <ProgressBar value={progress}/>
          </>
        )
      }
    }
  }
  const noOfReadsFunc = () => {
    if((noOfReads) !== "")
    {
      return (
        <Grid item>
          <NoOfReads text={noOfReads} style={{ marginTop: '17px', marginLeft: '30px',}}/>
        </Grid> 
      )
    }
  }

    return (
    <Paper sx={{maxWidth:284, maxHeight: 466, boxSizing: 'border-box'}}>
        <Card sx={{maxWidth:284, maxHeight: 466, boxSizing: 'border-box'}}>
      <CardMedia
        component="img"
        height="292px"
        width="294.1px"
        src={image}
        alt={bookName}
      />
      <CardContent sx={{boxSizing: 'border-box', paddingBottom: '0px !important',paddingLeft: '0px'}}>
          <Grid container direction="column">
              <Grid item>
              <TypographyComponent variant="subtitle3" text={bookName} style={bookNameStyle}/>
              </Grid>
              <Grid item>
                <TypographyComponent variant="body2" text={author} style={authorNameStyle} />
              </Grid>
              <Grid item container direction="row" xs>
                  <Grid item>
                    <TimeToRead text={time} style={{marginTop: '17px', marginLeft: '16px', width: '115px'}}/>
                  </Grid>
                  {
                     noOfReadsFunc()
                  }
                             
              </Grid>
               {/* <Grid item >
                  <Button variant="text" sx={{width: '62px', height: '20px', margin: '15px 111px 12px 111px', color: theme.palette.secondary.main, fontWeight: '500', lineHeight: '20px', textTransform: 'none', fontSize: '16px'}}>Finished</Button>
                </Grid>

                <ProgressBar value={40}/> */}
                {
                  buttonType()
                }
              
              
          </Grid> 
      </CardContent>   
    </Card>
</Paper>

    )

}