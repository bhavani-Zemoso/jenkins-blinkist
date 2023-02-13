import { AppBar, ThemeProvider, Toolbar, Box, Stack, styled, Button, MenuItem, Menu, IconButton, Backdrop} from "@mui/material"
import { theme } from "../../../Themes/theme"
import { IconComponent } from "../../atoms/Icons/Icons"
import { LogoComponent } from "../../atoms/Logo/Logo"
import { TypographyComponent } from "../../atoms/Typography/Typography"
import searchIcon from '../../../assets/searchIcon.png'
import { AvatarComponent } from "../../atoms/Avatar/Avatar"
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import React, { useState } from "react"
import { ExtendedNav } from "../../molecules/ExtendedNav/ExtendedNav"
import { NavLink } from "react-router-dom"
import LoginButton from "../../Authentication/LoginButton/LoginButton"
import LogoutButton from "../../Authentication/LogoutButton/LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import PersonIcon from '@mui/icons-material/Person';

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
    
    const [exploreStatus, setExploreStatus] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const [authStatus, setAuthStatus] = useState<boolean>(false);
    const [anchorAuthEl, setAnchorAuthEl] = useState<null | HTMLElement>(null);
    const openAuth = Boolean(anchorAuthEl);

    const { isAuthenticated } = useAuth0();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setExploreStatus(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setExploreStatus(false);
  };

  const handleAuthClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAuthEl(event.currentTarget);
    setAuthStatus(true);
  };

  const handleAuthClose = () => {
    setAnchorAuthEl(null);
    setAuthStatus(false);
  };

    return(
        <ThemeProvider theme={theme}>
        
        <AppBar position= 'static' sx={{backgroundColor:'white', boxShadow: 'none'}}>
            <Toolbar sx={{height: '86px',width: '1440px', marginLeft: '245px'}}>
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

                {
                    isAuthenticated
                    ?
                    <AvatarComponent>
                        BS
                    </AvatarComponent>
                    :
                    <AvatarComponent>
                        <PersonIcon />
                    </AvatarComponent>
                }

                
                {/* <IconComponent url={dropDown} style={{width:'10.61px', height: '6.48px', marginLeft: theme.spacing(0),color: theme.palette.grey[500], marginRight: '530px'}} /> */}
                <IconButton style={{width:'10.61px', height: '6.48px',color: theme.palette.grey[500], marginRight: '530px', marginLeft: theme.spacing(0)}}
                    id="auth-button"
                    aria-controls={openAuth ? 'auth-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openAuth ? 'true' : undefined}
                    onClick={handleAuthClick}
                    data-testid="authButton">
                    <KeyboardArrowDownSharpIcon />
                </IconButton>
                <Backdrop open={open} onClick={handleClose}  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Menu id="categories-menu"
                    anchorReference="anchorPosition"
                    anchorPosition={{top: 86, left: 250}}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            height: '455px',
                            width: '100vw',
                            outline: 'none',
                            border: '0px',
                            backgroundColor: theme.palette.backgroundcolor.main,
                            boxShadow: 'none',
                            margin: '0px',
                            padding: '0px'
                        
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
                    </Backdrop>
                
                <Backdrop open={openAuth} onClick={handleAuthClose}  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Menu 
                    id="auth-menu"
                    anchorEl={anchorAuthEl}
                    open={openAuth}
                    onClose={handleAuthClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{top: 86, left: 1150}}
                    PaperProps={{
                        style: {
                            height: '70px',
                            outline: 'none',
                            border: '0px',
                            backgroundColor: theme.palette.backgroundcolor.main,
                            boxShadow: 'none',
                        },
                    }}
                    MenuListProps={{
                    'aria-labelledby': 'auth-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }} data-testid="auth-menu">
                        {
                            isAuthenticated 
                            ?
                            <MenuItem onClick={handleAuthClose}>
                                <LogoutButton />
                            </MenuItem>
                            :
                            <MenuItem onClick={handleAuthClose}>
                                <LoginButton />
                            </MenuItem>  
                        }
                        
                    </Menu>
                </Backdrop>
            </Toolbar>
        </AppBar>
       
        
        </ThemeProvider>
    )
}