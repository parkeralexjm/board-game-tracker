import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0/client';
import Paper from '@mui/material/Paper';
import { Background, StyledMainBorder } from "@/styles/Background";

type Games = { name:string, image_url: string}

const Homepage = () => {
  const [randomGame, setRandomGame] = useState<{ count: number; games: Games[] }>()

  useEffect(() => {
    fetch('https://api.boardgameatlas.com/api/search?random=true&limit=1&client_id=p5N6VqtA3g')
      .then(res => res.json())
      .then(data => setRandomGame(data));
  },[]);

  // Make a loading component later to make this more interesting and reposition to the correct div
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>

  return (  
      <Background aria-label='homepage-background'>
        <StyledMainBorder aria-label="welcome-box">
            <Box>
              {user ? <h2>Welcome {user.nickname}</h2> : <h2>Please login to your account</h2>}
            </Box>
            <Box>
              {randomGame ? 
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <h2>
                    Here is a random game: {randomGame.games[0].name}
                  </h2>
                  <Paper variant="outlined">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={randomGame.games[0].image_url} alt={''} width={'200px'} height={'200px'}/>
                  </Paper>
                </Box> 
              // If not loaded yet then display Loading...
              : <h2>Loading...</h2>}
            </Box>
        </StyledMainBorder>  
      </Background>
    )
}

export default Homepage;
