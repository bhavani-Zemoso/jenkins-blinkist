
import { AppBar, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../../Themes/theme'
import { Header } from './Header'
import {BrowserRouter as Router} from 'react-router-dom'

export default {
    title: 'Organisms/Header',
    component: AppBar,
    decorators: [(story: any) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>]
}

export const Primary = () => <Router>
    <Header></Header>
    </Router>