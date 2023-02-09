import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from "next/link";

const Header = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{ letterSpacing: '.3rem', mr: 3 }}
        >
          Board Game Tracker
        </Typography>
        <Box>
          <Link href="/friends">
            <Button sx={{ my: 2, color: 'white' }}>
              Friends
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
