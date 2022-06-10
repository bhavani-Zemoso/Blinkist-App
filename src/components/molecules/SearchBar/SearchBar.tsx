import { IconComponent } from "../../atoms/Icons/Icons"
import { InputBar } from "../../atoms/Input/Input"
import searchIcon from '../../../assets/searchIcon.png'
import { Box} from "@mui/material"
import { theme } from "../../../Themes/theme"

const labelStyles = {
    color: '#747575',
    width: '658px',
}

const iconStyle = {
    color: theme.palette.textcolor.main,
    left: '12.34%',
    right: '11.03%',
    top: '12.34%',
    bottom: '11.03%',
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
            <IconComponent url={searchIcon} style={iconStyle}/>
            <InputBar placeholder={"Search by title or author"} style={labelStyles}/>
        </Box>   
    )
}