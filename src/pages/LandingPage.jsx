import { useEffect } from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import LandingPageListings from '../components/LandingPageListings';
import LandingPageNavbar from '../components/LandingPageNavbar';
import Footer from '../components/Footer';
const LandingPage = () => {
  useEffect(() => {
    document.title = 'GIGSHUB -  Landing Page';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);
  return (
    <section className='relative  bg-gray-700 flex flex-col justify-center align-center text-center z-[999] overflow-hidden'>
      <LandingPageNavbar />
      <Hero />
      <HomeCards />
      <LandingPageListings />
      <div className='hero absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center'></div>
      <Footer customClasses='mt-0' />
    </section>
  );
};
export default LandingPage;
