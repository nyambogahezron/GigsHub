import SearchBox from "../components/SearchBox";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import JobList from "../components/jobList";
const Home = () => {
  return (
    <main>
      <SearchBox />
      <div className="job-container">
        <JobList />
      </div>
    </main>
  );
};

export default Home;
