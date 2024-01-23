import SearchBox from '../components/SearchBox';
import JobList from '../components/jobList';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    document.title = 'GIGHUB -  Home';
    return () => {
      document.title = 'GIGHUB - Find | Post Jobs';
    };
  }, []);
  return (
    <main>
      <SearchBox />
      <div className='job-container'>
        <JobList />
      </div>
    </main>
  );
};

export default Home;
