import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { Background, StyledCollectionBorder, StyledMainBorder } from '@/styles/StyledComponents';
import UserCollection from '@/components/UserCollection';
import GuardedPage from '@/components/GuardedPage';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';

const inter = Inter({ subsets: ['latin'] })

const Collection = () => {
  const firestoreInstance = getFirestore(useFirebaseApp())
  return (
      <GuardedPage whenSignedOut="/auth/sign-in">
        <FirestoreProvider sdk={firestoreInstance}>
          <Head>
            <title>Board Game Tracker | Collection</title>
            <meta name="description" content="A website for tracking board games" />
          </Head>
          <main>
            <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
              <Sidebar/>
              <Background aria-label='collection-background'>  
                  <StyledCollectionBorder aria-label="collection-box">
                    <UserCollection/>
                  </StyledCollectionBorder> 
              </Background>
            </Container>
          </main>
        </FirestoreProvider>
      </GuardedPage>
  )
}

export default Collection