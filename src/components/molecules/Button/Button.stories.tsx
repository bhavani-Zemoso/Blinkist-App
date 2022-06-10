
import { Button } from '@mui/material'
import { ButtonComponent } from './Button'


export default {
    title: 'Molecules/Button',
    component: Button
}

export const Primary = () => <ButtonComponent variant={"contained"} text="Add to library" icon="true" style={{width:'60px', height: '20px'}}></ButtonComponent>