import * as React from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import loginRedirect from '@/utils/loginRedirect';
import { Background } from "@/styles/Background";

const Collection = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Make a loading component later to make this more interesting
  loginRedirect(user, isLoading, router)

  return (  
    <Background aria-label='collection-background'>  
      {user ? 
        <Box aria-label="collection-box" sx={{
          backgroundColor: '#2D5C62',
          margin: 5
          }}>
        <h2>This is where the stuff will go to get and display the collection</h2>
      </Box> 
      // If no user then render an empty box
      : <Box></Box>}

    </Background>
    )
}

export default Collection;
