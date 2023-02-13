
import { Grid, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { theme } from "../../../Themes/theme"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import { CardComponent } from "../../organisms/Card/Card"
import { Footer } from "../../organisms/Footer/Footer"
import { Header } from "../../organisms/Header/Header"
import { TabPanelComponent } from "../../organisms/Tab/TabPanel"

const typographyStyle = {
    width: '178px',
    height: '45px',
    marginTop: '59px',
    marginLeft: '260px',
    color: theme.palette.textcolor.main
}

const TabPanelStyle = {
    marginLeft: '245px', 
    marginTop: '60px',
    width:'912px'

}

 export const MyLibrary = () => {

    const tabData = [
        {
            'label': 'Currently reading',
            'value' : "Currently reading",
        },
        {
            'label': 'Finished',
            'value': 'Finished',
        }
    ];

     const [books, setBooks] = useState<any>([]);

     const [currentState, setCurrentState] = useState(tabData[0].value);
     const handleState = (state:string) => {
         setCurrentState(state);
     }
     

     useEffect(() => {
         fetch(' http://localhost:8000/books')
         .then(res => res.json())
         .then(data => setBooks(data))
     },[])

     const cards = () => {
         if(currentState === 'Currently reading')
         {
             return books.map((book: any) => {
                 if(book.readStatus === 'Currently reading')
                 {
                    return (
                        <Grid item xs={2} sm={2} md={4}>
                             <CardComponent image={book.image} bookName={book.name} author={book.author} time={book.timeToRead} 
                        noOfReads={book.NoOfReads} key={book.id} readStatus={book.readStatus} page={"Library"} progress={book.progress}/>
                        </Grid>
                       
                     )
                 }
                 
             })
         }
         else if(currentState === 'Finished')
         {
            return books.map((book: any) => {
                if(book.readStatus === 'Finished')
                {
                   return (
                       <Grid item xs={2} sm={2} md={4}>
                           <CardComponent key={book.id} image={book.image} bookName={book.name} author={book.author} time={book.timeToRead} 
                       noOfReads={book.NoOfReads} readStatus={book.readStatus} page={"Library"} progress={book.progress}/>
                       </Grid>
                       
                    )
                }
                
            })
         }

     }

     return(
        <Box sx={{margin: theme.spacing(1)}}>
            {/* <Header /> */}
            <TypographyComponent variant={"h1"} style={typographyStyle} text={"My Library"} />
            <TabPanelComponent style={TabPanelStyle} stateHandler={handleState} tabData={tabData}/>
{/*             {
                books.map((book: any) => (
                    <CardComponent key={book.id} image={book.image} bookName={book.name} author={book.author} time={book.timeToRead} 
                        noOfReads={book.NoOfReads} />
                ))
            } */}
            <Grid container rowSpacing={theme.spacing(6)} sx={{marginLeft: '245px', marginTop: '30px', width: '912px', marginBottom: '111px'}}>
                {
                    cards()
                }
                
            </Grid>
            {/* <Footer /> */}
        </Box>
     )
     
 }