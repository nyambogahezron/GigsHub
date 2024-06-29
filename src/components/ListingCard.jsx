import PropTypes from 'prop-types';
import { FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const ListingCard = ({ _id, image, title, position, location, tags }) => {
  const page_location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      key={_id}
      className='bg-gray-50 border border-gray-200 rounded p-6 z-50'
    >
      <div className='flex'>
        <img
          className='job-pic w-48 mr-6 '
          src={image || '/images/no-image.png'}
          alt={title}
        />
        <div>
          <h3 className='flex items-start text-lg transition-all hover:text-blue-500 hover:underline font-bold capitalize'>
            <Link to={`/job-detail/${_id}`}>{title}</Link>
          </h3>
          <div className='flex text-sm font-medium mb-4'>{position}</div>
          <ul className='flex'>
            {tags.split(',').map((tag) => {
              const trimmedTag = tag.trim();
              return (
                <li
                  className='flex items-center justify-center text-white rounded-xl p-1 px-3 m-1 text-xs transition ease-in-out delay-150 bg-blue-500  hover:scale-110 hover:bg-indigo-500 duration-300'
                  key={trimmedTag}
                  onClick={() => {
                    navigate(`${page_location.pathname}?tags=${trimmedTag}`);
                  }}
                >
                  {trimmedTag}
                </li>
              );
            })}
          </ul>
          <div className='flex flex-row gap-1 items-center text-sm mt-5'>
            <span>
              <FaMapMarkerAlt className='text-red-600 text-sm' />
            </span>
            <span className='mb-[2px] text-gray-500 font-semibold capitalize'>
              {location}
            </span>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='flex gap-1 items-center'>
              <span>
                <FaRegClock className='text-red-600 text-sm' />
              </span>
              <span className='text-sm font-semibold text-gray-500'>
                Full-time
              </span>
            </div>
            <div className='flex items-center text-sm gap-1'>
              <Link
                to={`/job-detail/${_id}`}
                className='text-blue-500 hover:text-blue-600 hover:underline'
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingCard.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ListingCard;
