import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { theme } from "../../../Themes/theme"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import { Banner } from "../../molecules/Banner/Banner"
import { SearchBar } from "../../molecules/SearchBar/SearchBar"
import { CardComponent } from "../../organisms/Card/Card"


export const EntepreneurshipPage = () => {
    const [books, setBooks] = useState<any>([]);

    useEffect(() => {
        fetch(' http://localhost:8000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const trendingBlinks = () => {
        return(
            books.map((book: any) => {
                if(book.category.includes('Trending blinks'))
                {
                    return(
                        <Grid item xs={2} sm={2} md={4}>
                            <NavLink to={`/BookDetailsViewPage/${book.id}`} key={book.id} style={{textDecoration: 'none'}}>
                             <CardComponent image={book.image} bookName={book.name} author={book.author} time={book.timeToRead} 
                        noOfReads={book.NoOfReads} key={book.id} readStatus={book.readStatus} page={"AllBooks"} progress={book.progress}/>
                            </NavLink>
                        </Grid>
                    )
                    
                }
            })
        )
    };

    const justAdded = () => {
        return(
            books.map((book: any) => {
                if(book.category.includes('Just added'))
                {
                    return(
                        <Grid item xs={2} sm={2} md={4}>
                        <NavLink to={`/BookDetailsViewPage/${book.id}`} key={book.id} style={{textDecoration: 'none'}}>
                             <CardComponent image={book.image} bookName={book.name} author={book.author} time={book.timeToRead} 
                        noOfReads={book.NoOfReads} key={book.id} readStatus={book.readStatus} page={"AllBooks"} progress={book.progress}/>
                        </NavLink>
                        </Grid>
                    )
                    
                }
            })
        )

    };

    const featured = () => {
        return(
            books.map((book: any) => {
                if(book.category.includes('Featured audio blinks'))
                {
                    return(
                        <Grid item xs={2} sm={2} md={4}>
                            <NavLink to={`/BookDetailsViewPage/${book.id}`} key={book.id} style={{textDecoration: 'none'}}>
                             <CardComponent image={book.image} bookName={book.name} author={book.author} time={book.timeToRead} 
                        noOfReads={book.NoOfReads} key={book.id} readStatus={book.readStatus} page={"AllBooks"} progress={book.progress}/>
                        </NavLink>
                        </Grid>
                    )
                    
                }
            })
        )
    }

    return(
        <Box>
            <Banner url={'https://i.ibb.co/XFZtZP3/exploreposter.png'}/>
            <SearchBar />
            <TypographyComponent variant="body1" style={{fontSize: '24px', lineHeight: '30px', width:'174px', color: theme.palette.textcolor.main, marginTop: '80px', marginLeft: '255px'}} text="Trending blinks" />
            <Grid container rowSpacing={theme.spacing(6)} sx={{marginLeft: '245px', marginTop: '25px', width: '912px', marginBottom: '80px'}}>
                {
                    trendingBlinks()
                }
            </Grid>
            <TypographyComponent variant="body1" style={{fontSize: '24px', lineHeight: '30px', width:'174px', color: theme.palette.textcolor.main, marginLeft: '255px'}} text="Just added" />
            <Grid container rowSpacing={theme.spacing(6)} sx={{marginLeft: '245px', marginTop: '25px', width: '912px', marginBottom: '80px'}}>
                {
                    justAdded()
                }
            </Grid>
            <TypographyComponent variant="body1" style={{fontSize: '24px', lineHeight: '30px', color: theme.palette.textcolor.main, marginLeft: '255px'}} text="Featured audio blinks" />
            <Grid container rowSpacing={theme.spacing(6)} sx={{marginLeft: '245px', marginTop: '25px', width: '912px', marginBottom: '80px'}}>
                {
                    featured()
                }
            </Grid>
        </Box>
        
    )
}