import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { mainTheme } from '@/themes/themes';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import pageIndex from '@/utils/pageIndex';

const drawerWidth = 240;

const ResponsiveDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const pages = pageIndex;

  const drawer = (
    <div>
        <Toolbar sx={{display:'flex', justifyContent:'space-around'}}>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
            >  
              BGC
            </Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'right', gap:'10px', py:'10px'}}>
            <Button variant='contained' href="/api/auth/login">
              Login
            </Button>
            <Button variant='outlined' href="/api/auth/logout"> 
              Logout
            </Button>
          </Box>
        </Toolbar>
        <Divider />
        <List>
          {pages.map((pages) => (
            <ListItem key={pages.name} disablePadding>
              <ListItemButton component="a" href={`/${pages.id}`} color="primary">
                <ListItemText primary={pages.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    </div>
  )

  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              placeholder text
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ResponsiveDrawer;
