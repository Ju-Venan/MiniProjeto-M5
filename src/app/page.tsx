import Head from 'next/head';
import Header from '../components/header';
import MainSection from '../components/mainSection';
// import AboutSection from '../components/aboutSection';
// import AllAreasSection from '../components/allAreasSection';
// import ContinentsSection from '../components/continentSection';
// import ProblemsSection from '../components/problemSection';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoAPI</title>
        <meta name="description" content="Explore áreas de preservação ambiental e seus desafios." />
      </Head>

      <Header />

      <main>
        <MainSection />
        {/* <AboutSection /> */}
        {/* <AllAreasSection />
        <ContinentsSection />
        <ProblemsSection /> */}
      </main>

      <Footer />
    </>
  );
}
