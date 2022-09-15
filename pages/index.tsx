import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inspire Digital</title>
        <meta name='description' content='Inspire digital company landing' />
        <link rel='icon' href='/sun-icon.svg' />
      </Head>
      <Nav />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
