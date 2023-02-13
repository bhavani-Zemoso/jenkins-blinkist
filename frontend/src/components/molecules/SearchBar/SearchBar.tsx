import { InputBar } from "../../atoms/Input/Input"
import { Box} from "@mui/material"
import { theme } from "../../../Themes/theme"

const labelStyles = {
    color: '#747575',
    width: '658px',
}

const iconStyle = {
    color: theme.palette.textcolor.main,
    marginRight: '5px',
    marginTop: '5px',
    marginLeft: '5px'
}


export const SearchBar = () => {
    return (
        <Box sx={{
            display: 'flex',
            marginLeft: '264px',
        }}>
            <InputBar placeholder={"Search by title or author"} style={labelStyles} data-testid='searchBar'/>
        </Box>   
    )
}