import { Link } from 'react-router-dom';

const ViewAllJobs = () => {
  return (
    <div className='m-auto w-full h-full  max-w-lg my-10 px-10 '>
      <Link
        to='/home'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        View All Jobs
      </Link>
    </div>
  );
};
export default ViewAllJobs;
