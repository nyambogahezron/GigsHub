import { useState, useEffect, Suspense } from 'react';
import Spinner from '../components/Spinner';
import ListingCard from './ListingCard';
const JobList = () => {
  const [gigsListData, setGigsListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getGigs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/v1/gigs?limit=9');
      setIsLoading(false);
      const data = await res.json();
      // console.log(data.gigs);
      setGigsListData(data.gigs);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error('Error fetching gigs data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getGigs();
  }, []);

  if (isError) {
    console.error('Error fetching gigs data:');
    return <div>Something went wrong...</div>;
  }
  if (gigsListData?.length === 0) {
    return <div>No gigs found </div>;
  }
  return (
    <Suspense fallback={<div>Loading Gigs...</div>}>
      {isLoading ? (
        <Spinner loading={isLoading} size={50} speed={100} />
      ) : (
        <div className='job-container'>
          {gigsListData.map((item) => {
            const { _id, image, title, company, jobLocation, tags } = item;
            return (
              <ListingCard
                key={_id}
                _id={_id}
                image={image}
                title={title}
                company={company}
                location={jobLocation}
                tags={tags}
              />
            );
          })}
        </div>
      )}
    </Suspense>
  );
};

export default JobList;
