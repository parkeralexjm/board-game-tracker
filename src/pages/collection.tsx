import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Background, StyledMainBorder } from '@/styles/Background';

const inter = Inter({ subsets: ['latin'] })

const UserCollection = () => {
  const { user, isLoading } = useUser();
  return (
    <>
      <Head>
        <title>Board Game Tracker</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
          <Sidebar/>
          <Background aria-label='collection-background'>  
            {user ? 
              <StyledMainBorder aria-label="collection-box">
              <h2>This is where the stuff will go to get and display the collection</h2>
            </StyledMainBorder> 
            // If no user then render an empty box
            : <StyledMainBorder></StyledMainBorder>}

          </Background>
        </Container>
      </main>
    </>
  )
}

export default withPageAuthRequired(UserCollection, {
  onRedirecting: () => <></>
})