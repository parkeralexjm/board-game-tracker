import Head from 'next/head';
import { NextPage } from 'next'
import { Inter } from '@next/font/google';
import Splash from '@/components/Splash';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Board Game Tracker | Register</title>
        <meta name="description" content="A website for tracking board games" />
      </Head>
      <main>
        <Splash/>  
      </main>
    </>
  )
}

export default Home;
