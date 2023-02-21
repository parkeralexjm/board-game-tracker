import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';
import CircularProgress from '@mui/material/CircularProgress';
import { Background, StyledMainBorder } from '@/styles/Background';
import { Box, Paper } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })
type Games = { name:string, image_url: string}

const Home = () => {
  const [randomGame, setRandomGame] = useState<{ count: number; games: Games[] }>()
  const randomGameURL = 'https://api.boardgameatlas.com/api/search?random=true&limit=1&client_id=p5N6VqtA3g'

  useEffect(() => {
    axios.get(randomGameURL).then((response) =>{
      setRandomGame(response.data)
    })
  },[]);

  // Make a loading component later to make this more interesting and reposition to the correct div
  const { user, isLoading } = useUser();
  if (isLoading) return <CircularProgress color="primary" />
  
  return (
    <>
      <Head>
        <title>Board Game Tracker</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
          <Sidebar/>
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
                  : <CircularProgress color="primary" />}
                </Box>
            </StyledMainBorder>  
          </Background>
        </Container>
      </main>
    </>
  )
}

export default Home;
