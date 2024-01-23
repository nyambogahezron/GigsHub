import SearchBox from '../components/SearchBox';
import Header from '../components/PageHeader';
import JobListData from '../components/data';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ManageJobs = () => {
  useEffect(() => {
    document.title = 'GIGHUB -  Manage Gigs';
    return () => {
      document.title = 'GIGHUB - Find | Post Jobs';
    };
  }, []);
  return (
    <main>
      <SearchBox />
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded'>
          <Header headerTitle='Manage Gigs' />

          <table className='w-full table-auto rounded-sm'>
            <tbody>
              {JobListData.map((item) => {
                const { id, title } = item;
                return (
                  <tr key={id} className='border-gray-300'>
                    <td className='px-4 py-8 border-t border-b border-gray-300 text-lg'>
                      <a href='show.html'>{title}</a>
                    </td>
                    <td className='px-4 py-8 border-t border-b border-gray-300 text-lg'>
                      <Link
                        to={`/edit-job/${id}`}
                        className='flex align-baseline items-baseline text-blue-400 px-6 py-2 rounded-xl'
                      >
                        <span>
                          <FaEdit />
                        </span>{' '}
                        <span> Edit</span>
                      </Link>
                    </td>
                    <td className='px-4 py-8 border-t border-b border-gray-300 text-lg'>
                      <form action=''>
                        <button className='flex align-baseline items-baseline text-red-600'>
                          <span className='text-sm'>
                            <FaTrash />
                          </span>
                          <span>Delete</span>
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default ManageJobs;
