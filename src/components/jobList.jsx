import JobListData from './data';

const JobList = () => {
  return (
    <>
      {JobListData.map((item) => {
        const { id, image, title, company, location } = item;
        return (
          <div
            key={id}
            className='bg-gray-50 border border-gray-200 rounded p-6'
          >
            <div className='flex'>
              <img className='job-pic w-48 mr-6 ' src={image} alt={title} />
              <div>
                <h3 className='text-2xl'>
                  <a href='show.html'>{title}</a>
                </h3>
                <div className='text-xl font-bold mb-4'>{company}</div>
                <ul className='flex'>
                  {Array.isArray(item.tags) &&
                    item.tags.map((tag) => (
                      <li
                        className='flex items-center justify-center bg-black text-white rounded-xl py-1 px-3 mr-2 text-xs'
                        key={tag.id}
                      >
                        {tag.tag}
                      </li>
                    ))}
                </ul>
                <div className='text-lg mt-4'>
                  <i className='fa-solid fa-location-dot'></i> {location}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default JobList;
