import SearchBox from '../components/SearchBox';
import JobList from '../components/jobList';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    document.title = 'GIGSHUB -  Home';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);
  return (
    <main>
      <SearchBox />
      <div>
        <JobList />
      </div>
    </main>
  );
};

export default Home;
