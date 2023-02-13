import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import Container from '@mui/material/Container';
import Sidebar from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Board Game Tracker</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Container maxWidth="xl">
          <Sidebar/>
        </Container>
      </main>
    </>
  )
}
