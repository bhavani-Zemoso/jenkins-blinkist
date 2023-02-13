
import { Box } from '@mui/material'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { EntepreneurshipPage } from '../../pages/EntrepreneurshipPage/EntrepreneurshipPage'
import { ExtendedNav } from './ExtendedNav'


export default {
    title: 'Molecules/ExtendedNav',
    component: Box
}

export const Primary = () => <Router>
    <ExtendedNav></ExtendedNav>
</Router>