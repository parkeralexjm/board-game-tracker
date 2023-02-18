import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Background, StyledCollectionBorder, StyledMainBorder } from '@/styles/Background';
import MyCollection from '@/components/myCollection';

const inter = Inter({ subsets: ['latin'] })

const UserCollection = () => {
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
              <StyledCollectionBorder aria-label="collection-box">
                <MyCollection/>
              </StyledCollectionBorder> 
          </Background>
        </Container>
      </main>
    </>
  )
}

export default withPageAuthRequired(UserCollection, {
  onRedirecting: () => <></>
})