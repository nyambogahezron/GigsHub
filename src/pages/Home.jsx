import Hero from '../components/Hero';
import SearchBox from '../components/SearchBox';
import JobList from '../components/jobList';
const Home = () => {
  return (
    <main>
      <Hero />
      <SearchBox />
      <div className='job-container'>
        <JobList />
      </div>
    </main>
  );
};

export default Home;
