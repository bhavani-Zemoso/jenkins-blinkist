import { Grid } from '@mui/material'
import timeIcon from '../../../assets/timeIcon.png'
import { theme } from '../../../Themes/theme'
import { IconComponent } from '../../atoms/Icons/Icons'
import { TypographyComponent } from '../../atoms/Typography/Typography'

type TimeToReadProps = {
    text: string,
    style: Object
}

export const TimeToRead = (props: TimeToReadProps) => {
    const {text, style} = props;
    return(
        <Grid container style={style} data-testid='TimeToRead'>
            <Grid item>
                <IconComponent url={timeIcon} style={{width: '16.67px', height: '16.67px', marginRight: theme.spacing(0), color: theme.palette.textcolor.light}} />
            </Grid>
            <Grid item>
                <TypographyComponent text={text} variant="caption1" style={{ width: '96px', height: '18px', color: theme.palette.textcolor.light, lineHeight: '18px'}} />
            </Grid>
        </Grid>  
    )
}