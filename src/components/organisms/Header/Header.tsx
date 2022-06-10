import { AppBar, ThemeProvider, Toolbar, Box, Stack, styled, Button, MenuItem, Menu} from "@mui/material"
import { theme } from "../../../Themes/theme"
import { IconComponent } from "../../atoms/Icons/Icons"
import { LogoComponent } from "../../atoms/Logo/Logo"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import dropDown from '../../../assets/dropDown.png'
import searchIcon from '../../../assets/searchIcon.png'
import { AvatarComponent } from "../../atoms/Avatar/Avatar"
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import React, { useState } from "react"
import { ExtendedNav } from "../../molecules/ExtendedNav/ExtendedNav"
import { NavLink } from "react-router-dom"

const logoStyle = {
    width: '124.09px',
    height: '26px',
    marginRight: theme.spacing(7),
    marginTop: '1px'
}

const iconStyle = {
    width: '20.31px',
    height: '20.31px',
    marginTop: '4px',
    marginRight: theme.spacing(7),
}

const StyledExplore = styled(Button)({

    textTransform: 'none',
    color: theme.palette.textcolor.main, 
    marginRight: '4px',
    width: '57px', 
    height: '20px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '700',
    fontFamily: "Roboto",
    marginTop: '5px',
})

interface HeaderProps {
    children?: React.ReactNode;
}

export const Header = (props: HeaderProps) => {
    
    const [exploreStatus, setExploreStatus] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setExploreStatus(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setExploreStatus(false);
  };
    return(
        <ThemeProvider theme={theme}>
        <AppBar position= 'static' sx={{backgroundColor:'white', boxShadow: 'none'}}>
            <Toolbar sx={{height: '86px',width: '1440px', marginLeft: '250px'}}>
                <Box sx={{display: 'flex', flexGrow: '1'}}>
                    <LogoComponent style={logoStyle}/>
                    <IconComponent url={searchIcon} style={iconStyle} />
                    {/* <Menu url={dropDown} /> */}
                    <StyledExplore variant="text" endIcon={exploreStatus ? <KeyboardArrowUpSharpIcon /> : <KeyboardArrowDownSharpIcon />} 
                    id="categories-button"
                    aria-controls={open ? 'categories-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    data-testid="exploreButton">
                            Explore</StyledExplore>
                    <NavLink to="/" style={{textDecoration: 'none'}}>
                        <TypographyComponent variant={"body1"} text="My Library" style={{color: theme.palette.textcolor.main, marginLeft: theme.spacing(7), marginTop: '3px'}}/>
                    </NavLink>
                </Box>

                <AvatarComponent name={"BS"} />
                <IconComponent url={dropDown} style={{width:'10.61px', height: '6.48px', marginLeft: theme.spacing(0),color: theme.palette.grey[500], marginRight: '530px'}} />
                <Menu id="categories-menu"
                anchorReference="anchorPosition"
                anchorPosition={{top: 86, left: 250}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        height: '455px',
                        outline: 'none',
                        border: '0px',
                        backgroundColor: theme.palette.backgroundcolor.main,
                        boxShadow: 'none'
                      
                    },
                  }}
                MenuListProps={{
                'aria-labelledby': 'categories-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }} data-testid="menu">
                    <MenuItem onClick={handleClose}>
                        <ExtendedNav />
                    </MenuItem>  
                </Menu>  
            </Toolbar>
        </AppBar>
       
        
        </ThemeProvider>
    )
}