import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import JobListData from '../components/data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const SingleJob = () => {
  // page title
  useEffect(() => {
    document.title = 'GIGSHUB - Job Details';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);

  const { itemId } = useParams();
  const [currentItem, setCurrentItem] = useState([]);
  useEffect(() => {
    const filtered = JobListData.filter(
      (item) => item._id.toString() === itemId
    );
    setCurrentItem(filtered[0]);
  }, [itemId]);
  return (
    <main>
      <SearchBox />
      <Link
        to='/home'
        className='flex baseline items-center justify-start transition-all  hover:text-blue-500 text-black bg-grey-500 ml-4 mb-4 '
      >
        <span>
          <FaArrowLeft />
        </span>
        <span> Back</span>
      </Link>

      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded'>
          <div className='flex flex-col items-center justify-center text-center'>
            <img
              className='w-48 mr-6 mb-6'
              src={currentItem.image}
              alt={currentItem.company}
            />

            <h3 className='text-2xl mb-2'>{currentItem.title}</h3>
            <div className='text-xl font-bold mb-4'>{currentItem.company}</div>
            <ul className='flex'>
              {Array.isArray(currentItem.tags) &&
                currentItem.tags.map((tag) => (
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
              {currentItem.location}
            </div>
            <div className='border border-gray-200 w-full mb-6'></div>
            <div>
              <h3 className='text-3xl font-bold mb-4'>Job Description</h3>
              <div className='text-lg space-y-6'>
                <p>{currentItem.description}</p>
                <p className='mt-2 mb-1'>{currentItem.jobType}</p>

                <a
                  href={currentItem.email}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block bg-primary-color text-white mt-6 py-2 rounded-xl hover:opacity-80'
                >
                  <i className='fa-solid fa-envelope'></i> Contact Employer
                </a>

                <a
                  href={currentItem.website}
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
  );
};
export default SingleJob;
