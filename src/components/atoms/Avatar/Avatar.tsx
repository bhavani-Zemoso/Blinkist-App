import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";

type AvatarProps = {
    name: string
}
export const AvatarComponent = (props: AvatarProps) => {
    return(
        <Stack>
            <Avatar sx={{bgcolor: '#69A6E3'}} data-testid="Avatar">{props.name}</Avatar>
        </Stack>
    )
}