import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] })

const Community = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>
 
  return (
    <>
      <Head>
        <title>Board Game Tracker</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
          <Sidebar/>
          <Background aria-label="account-background">
            <StyledMainBorder>
              <h2>Users</h2>
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
    </>
  )
}

export default withPageAuthRequired(Community, {
  onRedirecting: () => <></>
})