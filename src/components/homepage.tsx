import React from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';

const Homepage = () => {
  const { user, error, isLoading } = useUser();
  // Make a loading component later to make this more interesting
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  // If logged in then display a welcome message otherwise prompt user to login
  const renderWelcomeMessage = () => {
    if (user) {
      return <h2>Welcome {user.nickname} , here is a random game: </h2>
    } else {
      return <h2>Please login to your account</h2>
    }
  }

  return (  
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: '#012835', pt:'64px', display:'flex', flexDirection: 'column'}}>
        <Box aria-label="welcome-box" sx={{
          backgroundColor: '#b3e0dc',
          margin: 5
          }}>
            <Box>
              {renderWelcomeMessage()}
            </Box>
            <Box>
              
            </Box>
        </Box>  
      </Box>
    )
}

export default Homepage;
