import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

type ButtonProps = {
    variant: string,
    icon: boolean,
    style: Object,
    text: string,
}
export const ButtonComponent = (...props: any) => {

    const {variant, icon, style, text} = props;
    return(
        <Button variant={variant} startIcon={icon ? <AddIcon color={props.color}/> : ''} style={style}>
            {text}
        </Button>
    )
}