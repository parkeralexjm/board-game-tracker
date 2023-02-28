import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';

const inter = Inter({ subsets: ['latin'] })

const UserAccount = () => {
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
              <img src={user?.picture!} alt={'user avatar'}></img>
              <h2>{user?.nickname}</h2>
              <h2>{user?.email}</h2>
              <h2>{user?.updated_at}</h2>
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
    </>
  )
}

export default withPageAuthRequired(UserAccount, {
  onRedirecting: () => <></>
})