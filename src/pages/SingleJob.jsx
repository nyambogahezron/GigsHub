import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import Spinner from '../components/Spinner';


const SingleJob = () => {
  const [jobListData, setJobListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    const params = useParams();

    const id = params.id;

  // page title
  useEffect(() => {
    document.title = 'GIGSHUB - Job Details';
    return () => {
      document.title = 'Job Details';
    };
  }, []);
  const getGig = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/v1/gigs/${params.id}`);
      setIsLoading(false);
      const data = await res.json();
      setJobListData(data.gig);
      console.log(jobListData);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error('Error fetching gigs data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getGig();
  }, []);

  if (isError) {
    console.error('Error fetching gigs data:');
    return <div>Something went wrong...</div>;
  }
  const { image, title, company, location, tags, description, jobType, email, website } = jobListData;
  return (
    <>
      {isLoading ? (
        <Spinner/>
      ) : (
        <main>
          <Link
            to='/home'
            className='flex baseline items-center justify-start transition-all  hover:text-blue-500 text-black bg-grey-500 ml-4 mb-4 p-3'
          >
            <span>
              <FaArrowLeft />
            </span>
            <span>Go Back</span>
          </Link>

          <div className='mx-4 w-full'>
            <div className='bg-gray-50 border border-gray-200 p-10 rounded'>
              <div className='flex flex-col items-center justify-center text-center'>
                <img
                  className='w-48 mr-6 mb-6'
                  src={image}
                  alt={company}
                />

                <h3 className='text-2xl mb-2'>{title}</h3>
                <div className='text-xl font-bold mb-4'>
                  {company}
                </div>
                <ul className='flex'>
                  {Array.isArray(tags) &&
                    tags.map((tag) => (
                      <li
                        className='flex items-center justify-center text-white rounded-xl py-1 px-3 mr-2 text-xs transition ease-in-out delay-150 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300'
                        key={tag.id}
                      >
                        {tag.tag}
                      </li>
                    ))}
                </ul>
                <div className='text-lg my-4'>
                  <i className='fa-solid fa-location-dot'></i>{' '}
                  {location}
                </div>
                <div className='border border-gray-200 w-full mb-6'></div>
                <div>
                  <h3 className='text-3xl font-bold mb-4'>Job Description</h3>
                  <div className='text-lg space-y-6'>
                    <p>{description}</p>
                    <p className='mt-2 mb-1'>{jobType}</p>

                    <a
                      href={email}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block bg-primary-color text-white mt-6 py-2 rounded-xl hover:opacity-80'
                    >
                      <i className='fa-solid fa-envelope'></i> Contact Employer
                    </a>

                    <a
                      href={website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block bg-black text-white py-2 rounded-xl hover:opacity-80'
                    >
                      <i className='fa-solid fa-globe'></i> Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
 
};
export default SingleJob;
