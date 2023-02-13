import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../../Themes/theme'
import { Footer } from './Footer'

export default {
    title: 'Organisms/Footer',
    component: Box,
    decorators: [(story: any) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>]
}

export const Primary = () => <Footer></Footer>