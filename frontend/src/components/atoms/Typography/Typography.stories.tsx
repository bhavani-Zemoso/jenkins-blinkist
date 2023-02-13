
import { Typography } from '@mui/material'
import { theme } from '../../../Themes/theme'
import { TypographyComponent } from './Typography'

export default {
    title: 'Atoms/Typography',
    component: Typography
}

export const Small = () => <TypographyComponent variant="caption1" text="13-minute read" style={{color: theme.palette.textcolor.light}}/>
export const Medium = () => <TypographyComponent variant="body1" text="Amanda Little" style={{color: theme.palette.grey[100]}}/>
export const Large = () => <TypographyComponent variant="subtitle1" text="Beyond Entrepreneurship" style={{color: theme.palette.textcolor.main}}/>