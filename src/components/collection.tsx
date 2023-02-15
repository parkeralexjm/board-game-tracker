import * as React from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

const Collection = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  // Make a loading component later to make this more interesting
  if (isLoading) return <div>Loading...</div>
  if (!user) {router.push('/')}

  // If logged in then display a welcome message otherwise redirect to homepage
  const renderCollection = () => {
    if (user) {
      return <h2>This is where the stuff will go to get and display the collection</h2>
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
