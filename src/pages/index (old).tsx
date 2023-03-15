import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';
import CircularProgress from '@mui/material/CircularProgress';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';
import { Box, Paper } from '@mui/material';
import { GetServerSideProps } from 'next';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });
type Game = { name:string, image_url: string };

interface Props {
  randomGame?: Game;
}

const Home = ({ randomGame }: Props) => {
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
              {randomGame && (
                <Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>
                      Here is a random game: {randomGame.name}
                    </h2>
                    <Paper variant="outlined">
                      <Image
                        src={randomGame.image_url}
                        alt={randomGame.name}
                        width={200}
                        height={200}
                      />
                    </Paper>
                  </Box>
                </Box>
              )}
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const randomGameURL = 'https://api.boardgameatlas.com/api/search?random=true&limit=1&client_id=p5N6VqtA3g';
    const response = await axios.get<{ games: Game[] }>(randomGameURL);

    return {
      props: {
        randomGame: response?.data.games[0],
      }
    }
  } catch (e) {
    return {
      props: {}
    };
  }
}

export default Home;
