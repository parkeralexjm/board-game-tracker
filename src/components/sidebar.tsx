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
import { Button, ThemeProvider } from '@mui/material';
import { mainTheme } from '@/themes/themes';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '.MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="permanent"
          anchor="left"
        >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{  }}
          >
            BGC icon
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Collection', 'Community', 'High Scores'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={text} color="primary">
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}