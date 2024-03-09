import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, Link } from '@mui/material';
function Navbar({styles , handleTheme}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" style={styles.navbar}  >
        <Toolbar variant='dense' >
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="" component="a" sx={{ flexGrow: 1 , fontWeight:'800' , color:'#0fa3b1' , letterSpacing:'10px',fontSize:52 }}>
            AYSAM
          </Typography>
          {!isMobile ? 
           <Box flexDirection={'row'} >
            <Link href="/" className="nav-link " underline='none' color={'inherit'} mr={2} variant='h5'>Home</Link>
            <Link href="#about" className="nav-link " underline='none' color={'inherit'} mr={2} variant='h5'> About</Link>
            <Link href="#projects" className="nav-link " underline='none' color={'inherit'} mr={2} variant='h5'>Projects</Link>
            <Link href="#courses" className="nav-link " underline='none' color={'inherit'} mr={2} variant='h5'>Courses</Link>
            <Link href="#contact" className="nav-link " underline='none' color={'inherit'} mr={2} variant='h5'>Contact</Link>
           </Box> :null
           }
         <List sx={{display:'flex' , flexDirection:'row' , justifyContent: 'center', alignItems:'center' ,flexGrow: 1}}>
           <IconButton onClick={handleTheme} color="inherit" >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon fontSize='large' />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
         </List>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Toolbar />
        <Box  p={3}>
       <Typography variant="" component="a" sx={{ flexGrow: 1 , fontWeight:'600' , color:'#0fa3b1' , letterSpacing:'10px',fontSize:34 }}>
            AYSAM
          </Typography>
       </Box>
        <List>
      
          <ListItem button>
            <ListItemText primary="Home"  />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
     
    </>
  );
}

export default Navbar;
