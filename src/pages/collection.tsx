import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { Background, StyledCollectionBorder, StyledMainBorder } from '@/styles/StyledComponents';
import MyCollection from '@/components/myCollection';

const inter = Inter({ subsets: ['latin'] })

const UserCollection = () => {

  return (
    <>
      <Head>
        <title>Board Game Tracker | Collection</title>
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

export default UserCollection