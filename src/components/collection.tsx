import * as React from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import loginRedirect from '@/utils/loginRedirect';
import { Background, StyledMainBorder } from "@/styles/Background";

const Collection = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  // Make a loading component later to make this more interesting
  loginRedirect(user, isLoading, router)

  return (  
    <Background aria-label='collection-background'>  
      {user ? 
        <StyledMainBorder aria-label="collection-box">
        <h2>This is where the stuff will go to get and display the collection</h2>
      </StyledMainBorder> 
      // If no user then render an empty box
      : <StyledMainBorder></StyledMainBorder>}

    </Background>
    )
}

export default Collection;
