import * as React from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import loginRedirect from '@/utils/loginRedirect';

const Collection = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Make a loading component later to make this more interesting
  loginRedirect(user, isLoading, router)

  return (  
      <Box sx={{ width: "100vw", height: "100vh", backgroundColor: '#012835', pt:'64px', display:'flex', flexDirection: 'column'}}>
        <Box aria-label="collection-box" sx={{
          backgroundColor: '#b3e0dc',
          margin: 5
          }}>
            <h2>This is where the stuff will go to get and display the collection</h2>
        </Box>
      </Box>
    )
}

export default Collection;
