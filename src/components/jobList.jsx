import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

const JobList = () => {
  const [gigsListData, setGigsListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const page_location = useLocation();

  const getGigs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/v1/gigs');
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
    return <div>No gigs found with</div>;
  }
  return (
    <Suspense fallback={<div>Loading Gigs...</div>}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='job-container'>
          {gigsListData.map((item) => {
            const { _id, image, title, company, location } = item;
            return (
              <div
                key={_id}
                className='bg-gray-50 border border-gray-200 rounded p-6'
              >
                <div className='flex'>
                  <img
                    className='job-pic w-48 mr-6 '
                    src={image || '/images/no-image.png'}
                    alt={title}
                  />
                  <div>
                    <h3 className='text-xl transition-all hover:text-blue-500 hover:underline'>
                      <Link to={`/job-detail/${_id}`}>{title}</Link>
                    </h3>
                    <div className='text-lg font-medium mb-4'>{company}</div>
                    <ul className='flex'>
                      {item.tags.split(',').map((tag) => {
                        const trimmedTag = tag.trim();
                        return (
                          <li
                            className='flex items-center justify-center text-white rounded-xl p-1 px-3 m-1 text-xs transition ease-in-out delay-150 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300'
                            key={trimmedTag}
                            onClick={() => {
                              navigate(
                                `${page_location.pathname}?tags=${trimmedTag}`
                              );
                            }}
                          >
                            {trimmedTag}
                          </li>
                        );
                      })}
                    </ul>
                    <div className='text-sm mt-4'>
                      <i className='fa-solid fa-location-dot'></i> {location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Suspense>
  );
};

export default JobList;
