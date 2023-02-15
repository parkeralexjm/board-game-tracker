import * as React from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';

const Collection = () => {

  const { user, error, isLoading } = useUser();

  // Make a loading component later to make this more interesting
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  // If logged in then display a welcome message otherwise prompt user to login
  const renderCollection = () => {
    if (user) {
      return <h2>This is where the persons collection will display</h2>
    } else {
      return <h2>Please login to your account</h2>
    }
  }

  return (  
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: '#012835', pt:'64px', display:'flex', flexDirection: 'column'}}>
        <Box aria-label="collection-box" sx={{
          backgroundColor: '#b3e0dc',
          margin: 5
          }}>
            {renderCollection()}
        </Box>
      </Box>
    )
}

export default Collection;
