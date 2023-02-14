import * as React from 'react';
import { Box } from '@mui/material';
import MediaQuery from 'react-responsive';
import SignIn from './login';

const Homepage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: '#012835', pt:'64px', display:'flex', flexDirection: 'column'}}>
      <Box aria-label="login-box" sx={{
        backgroundColor: '#b3e0dc',
        margin: 5
        }}>
        <SignIn/>
      </Box>
    </Box>
  )
}

export default Homepage;