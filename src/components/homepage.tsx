import * as React from 'react';
import { Box, Paper } from '@mui/material';
import MediaQuery from 'react-responsive';

const Homepage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: '#009688' }}>
      <MediaQuery minWidth={601}>
        <Box sx={{ pl:'240px', pt:'60px'}}>
          <p>This is for non mobile sized screens, need advice for spacing</p>
        </Box>
      </MediaQuery>
    </Box>
  )
}

export default Homepage;