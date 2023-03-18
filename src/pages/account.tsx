import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';
import Image from "next/image";
import GuardedPage from '@/components/GuardedPage';
import { useUser } from 'reactfire';

const inter = Inter({ subsets: ['latin'] })

const Account = (props: any) => {
  const { status, data: user } = useUser();
  if (status === "loading") {
    return <span>loading...</span>;
  }

  console.log(user)

  return (
    <GuardedPage whenSignedOut="/auth/sign-in">
      <Head>
        <title>Board Game Tracker | Account</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl" sx={{ display: 'flex', p:0}} disableGutters>
          <Sidebar/>
          <Background aria-label="account-background">
            <StyledMainBorder>
              <h2>Welcome back, {user?.email}</h2>
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
    </GuardedPage>
  )
}

export default Account