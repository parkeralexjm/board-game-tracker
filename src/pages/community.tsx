import Head from 'next/head';
import { Inter } from '@next/font/google';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';
import { Background, StyledMainBorder } from '@/styles/StyledComponents';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'firebase_config';
import Box from '@mui/material/Box';
import UserDisplay from '@/components/UserDisplay';

const inter = Inter({ subsets: ['latin'] })

const Community = () => {
  const userInstance = collection(db, `/users`)
  const [userArray, setUserArray] = useState<{}[]>([])
  
  useEffect(() => {
    getDocs(userInstance)
    .then((data) => {
      setUserArray(data.docs.map((item) => {
        return { ...item.data(), id: item.id}
      }))
    })
  },[])
  
  return (
    <>
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
                {userArray.map((user) => (
                  UserDisplay(user)
                ))}
              </Box>
            </StyledMainBorder>
          </Background>
        </Container>
      </main>
    </>
  )
}

export default Community