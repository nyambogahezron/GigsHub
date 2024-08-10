import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import Spinner from '../components/Spinner';
import { FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';

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

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );
    console.log(jobId);

    if (!confirm) return;

    toast.success('Job deleted successfully');
  };
  if (isError) {
    console.error('Error fetching gigs data:');
    return <div>Something went wrong...</div>;
  }
  const { title, jobLocation, description, jobType, image, tags } = jobListData;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <section>
            <div className='container m-auto py-6 px-6'>
              <Link
                to='/home'
                className='text-indigo-500 hover:text-indigo-600 flex items-center'
              >
                <FaArrowLeft className='mr-2' /> Back to Job Listings
              </Link>
            </div>
            <div className='bg-indigo-50'>
              <div className='container py-6 px-6'>
                <img
                  className='flex items-center justify-center w-48 mr-6 mb-6'
                  src={image}
                  alt={title}
                />

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
              </div>
              <div className='container m-auto py-10 px-6'>
                <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                  <main>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                      <div className='text-gray-500 mb-4'>{jobType}</div>
                      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
                      <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                        <FaMapMarker className='text-orange-700 mr-1' />
                        <p className='text-orange-700'>{jobLocation}</p>
                      </div>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                      <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                        Job Description
                      </h3>

                      <p className='mb-4'>{description}</p>

                      <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                        Salary
                      </h3>

                      <p className='mb-4'>$100k / Year</p>
                    </div>
                  </main>

                  {/* <!-- Sidebar --> */}
                  <aside>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                      <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                      <h2 className='text-2xl'>Google</h2>

                      <p className='my-2'>Google tech</p>

                      <hr className='my-4' />

                      <h3 className='text-xl'>Contact Email:</h3>

                      <p className='my-2 bg-indigo-100 p-2 font-bold'>
                        company@mail.com
                      </p>

                      <h3 className='text-xl'>Contact Phone:</h3>

                      <p className='my-2 bg-indigo-100 p-2 font-bold'>
                        {' '}
                        0710009999
                      </p>
                    </div>

                    <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                      <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                      <Link
                        to={`/edit-job/${id}`}
                        className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                      >
                        Edit Job
                      </Link>
                      <button
                        onClick={() => onDeleteClick(id)}
                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                      >
                        Delete Job
                      </button>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default SingleJob;
