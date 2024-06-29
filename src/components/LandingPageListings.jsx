import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import ListingCard from './ListingCard';

const LandingPageListings = () => {
  const [gigsListData, setGigsListData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getGigs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/v1/gigs?limit=3');
      setIsLoading(false);
      const data = await res.json();
      // console.log(data.gigs);
      setGigsListData(data.gigs);
      setIsLoading(false);
      setIsError(false);
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
    return <div>Something went wrong no jobs found...</div>;
  }
  if (gigsListData?.length === 0) {
    return <div>No gigs found with</div>;
  }
  return (
    <section className='bg-blue-50 px-4 py-10'>
      {isLoading && <Spinner loading={isLoading} />}
      <div className='job-container'>
        {gigsListData.map((item) => {
          const { _id, image, title, position, jobLocation, tags } = item;
          return (
            <>
              <ListingCard
                key={_id}
                _id={_id}
                image={image}
                title={title}
                position={position}
                location={jobLocation}
                tags={tags}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};
export default LandingPageListings;
