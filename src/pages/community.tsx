import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';
import { useState } from 'react';
import Box from '@mui/material/Box';
import GuardedPage from '@/components/GuardedPage';

const inter = Inter({ subsets: ['latin'] })

const Community = () => {
  const [userArray, setUserArray] = useState<{}[]>([])
  
  return (
    <GuardedPage whenSignedOut="/auth/sign-in">
      <Head>
        <title>Board Game Tracker | Community</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
          <Sidebar/>
          <Background aria-label="account-background">
            <StyledMainBorder>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap"}}>
                Userlist
              </Box>
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
      </GuardedPage>
  )
}

export default Community