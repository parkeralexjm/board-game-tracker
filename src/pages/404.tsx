import Link from 'next/link'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Sidebar from '@/components/sidebar';
import Box from '@mui/material/Box';


const FourOhFour = () => (
  <Container sx={{display: 'flex', flexDirection:'column'}}>
      <Sidebar/>
        <Box marginTop={'100px'} sx={{marginLeft: {xs:0, sm:'240px'}}}>
          <Typography variant="h3">404 - Page Not Found</Typography>
          <Link href="/">
            <Button color='secondary'>
              Go back home
            </Button>
          </Link>
        </Box>
  </Container>
);

export default FourOhFour;
