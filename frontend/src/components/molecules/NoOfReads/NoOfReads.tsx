import { Grid } from '@mui/material'
import userIcon from '../../../assets/UserIconReads.png'
import { theme } from '../../../Themes/theme'
import { IconComponent } from '../../atoms/Icons/Icons'
import { TypographyComponent } from '../../atoms/Typography/Typography'

type NoOfReadsProps = {
    text: string,
    style: Object
}

export const NoOfReads = (props: NoOfReadsProps) => {
    const {style, text} = props;
    return(
        <Grid container style={style} data-testid="NoOfReads">
            <Grid item>
                <IconComponent url={userIcon} style={{width: '13.33px', height: '17.5px', marginRight: theme.spacing(0), color: theme.palette.textcolor.light}} />
            </Grid>
            <Grid item>
                <TypographyComponent text={text} variant="caption1" style={{ width: '64px', height: '18px', color: theme.palette.textcolor.light, lineHeight: '17.6px'}} />
            </Grid>
        </Grid>  
    )
}