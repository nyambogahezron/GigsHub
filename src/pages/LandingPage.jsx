import { useEffect } from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import ViewAllJobs from '../components/ViewAllJobs';
import LandingPageListings from '../components/LandingPageListings';
import LandingPageNavbar from '../components/LandingPageNavbar';
const LandingPage = () => {
  useEffect(() => {
    document.title = 'GIGSHUB -  Landing Page';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);
  return (
    <section className='relative w-screen bg-gray-700 flex flex-col justify-center align-center text-center z-50'>
      <LandingPageNavbar />
      <Hero />
      <HomeCards />
      <LandingPageListings />
      <ViewAllJobs />
      <div className='hero absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center'></div>
    </section>
  );
};
export default LandingPage;
