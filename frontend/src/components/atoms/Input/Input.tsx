
import { InputAdornment, TextField, styled } from "@mui/material"
import { theme } from "../../../Themes/theme"
import SearchIcon from '@mui/icons-material/Search';

const StyledInput = styled(TextField)(() => ({
    width: '598px',
    height: '0px',
    '& label.Mui-focused': {
        color: theme.palette.primary.main,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: theme.palette.primary.main,
        },
        '&:hover fieldset': {
          borderColor: theme.palette.primary.main,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.main,
        },
      },
}))

type placeholderProps = {
  placeholder: string,
  style: Object
}

export const InputBar = (props: placeholderProps) => {
    return(
        <StyledInput id='standard-basic' variant='standard' placeholder={props.placeholder} style={props.style} 
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
        }}/> 
    )
}