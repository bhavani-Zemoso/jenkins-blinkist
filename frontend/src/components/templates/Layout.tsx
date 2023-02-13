import { Box } from "@mui/material"
import { Footer } from "../organisms/Footer/Footer"
import { Header } from "../organisms/Header/Header"
import { MyLibrary } from "../pages/MyLibrary/MyLibrary"
import { Routes, Route } from "react-router-dom";
import { EntepreneurshipPage } from '../pages/EntrepreneurshipPage/EntrepreneurshipPage';
import { BookDetailsViewPage } from '../pages/BookDetailsViewPage/BookDetailsViewPage';
import { ExtendedNav } from '../molecules/ExtendedNav/ExtendedNav';

export const Layout = () => {
    return(
        <Box sx={{margin: '0 auto'}}>
            <Header/>
            
                <Routes>
                <Route path="/" element={<MyLibrary />} />
                <Route path="/EntrepreneurshipPage" element={<EntepreneurshipPage />} />
                <Route
                    path="*"
                    element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                    }
                />
                <Route path="/BookDetailsViewPage/:bookId" element={<BookDetailsViewPage />} />
                <Route path="/extendedNav" element={<ExtendedNav />} />
                <Route path="/:value" element={<MyLibrary />} />
                </Routes>
             
            <Footer />
        </Box>
    )
}