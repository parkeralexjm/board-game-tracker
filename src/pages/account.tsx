import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

const UserAccount = () => {
  return (
    <>
      <Head>
        <title>Board Game Tracker | Account</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
          <Sidebar/>
          <Background aria-label="account-background">
            <StyledMainBorder>
              <Image 
              width={200}
              height={200}
              src={'/'} alt={'user avatar'}>
              </Image>
              <h2>username</h2>
              <h2>user email</h2>
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
    </>
  )
}

export default UserAccount