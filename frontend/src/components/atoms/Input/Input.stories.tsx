
import { TextField } from '@mui/material'
import React from 'react'
import { InputBar } from './Input'

export default {
    title: 'Atoms/Input',
    component: TextField
}

export const Small = () => <InputBar placeholder='Search by author or book' style={{color: '#747575',width: '329px'}} />
export const Medium = () => <InputBar placeholder='Search by author or book' style={{color: '#747575',width: '658px'}} />
export const Large = () => <InputBar placeholder='Search by author or book' style={{color: '#747575',width: '987px'}} />