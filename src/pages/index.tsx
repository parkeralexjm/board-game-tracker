import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/header';
import Container from '@mui/material/Container';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Board Game Tracker</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="xl">
          <div>Content here</div>
        </Container>
      </main>
    </>
  )
}
