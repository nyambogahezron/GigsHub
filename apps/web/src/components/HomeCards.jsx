import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4 z-50 mx-w-[1200px] flex items-center justify-center'>
      <div className='container-xl lg:container px-1 ml-[-15px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4  rounded-lg m-auto'>
          <Card>
            <h2 className='text-2xl font-bold'>For Employees</h2>
            <p className='mt-4 mb-4'>
              Browse our jobs and start your career today
            </p>
            <Link
              to='/home'
              className='flex w-full items-center justify-center bg-black text-white rounded-lg px-4 py-2  transition-all hover:bg-gray-700'
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg='bg-indigo-200'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-4 mb-4'>
              List your job to find the perfect developer for the role
            </p>
            <Link
              to='/create'
              className='lex w-full items-center justify-center bg-black text-white rounded-lg px-4 py-2  transition-all  hover:bg-indigo-600'
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
