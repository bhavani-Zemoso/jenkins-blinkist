import { Box, LinearProgress} from "@mui/material"

const barStyle = {
    backgroundColor: '#F1F6F4',
    border: '1px solid #E1ECFC',
    borderRadius: '0px 0px 8px 8px',
    width: '283px',
    height: '15px',
}

type ProgressBarProps = {
    value: number
}

export const ProgressBar = (props: ProgressBarProps) => {
    return(
        <Box sx={{color: '#E1ECFC'}}>
            <LinearProgress variant='determinate' value={props.value} sx={barStyle} color='inherit' data-testid="ProgressBar"/>
        </Box>
        
    )
}