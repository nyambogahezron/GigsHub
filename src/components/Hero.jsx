const Hero = () => {
  return (
    <section className='relative h-72 bg-primary-color flex flex-col justify-center align-center text-center space-y-4 mb-4'>
      <div
        className='absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center'
        style={{ backgroundImage: `images/primary-color-logo.png` }}
      ></div>

      <div className='z-10'>
        <h1 className='text-6xl font-bold uppercase text-white'>
          Gigs<span className='text-black'>Hub</span>
        </h1>
        <p className='text-2xl text-gray-200 font-bold my-4'>
          Find or post jobs & projects
        </p>
        <div>
          <a
            href='register.html'
            className='inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black'
          >
            Sign Up to List a Gig
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
