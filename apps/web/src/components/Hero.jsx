import PropTypes from 'prop-types';
const Hero = ({
  title = 'Become a empyoyee or employer  now!',
  subtitle = 'Find the job that fits your skill set',
}) => {
  return (
    <section className='bg-gray-900 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center px-4'>
          <h1 className='text-2xl font-extrabold text-white sm:text-3xl md:text-4xl capitalize'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
