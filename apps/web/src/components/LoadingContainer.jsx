const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-12 h-12 border-4 border-t-4 border-transparent rounded-full animate-spin mr-3 border-blue-500'></div>
      <div className='w-12 h-12 border-4 border-t-4 border-transparent rounded-full animate-reverse-spin border-red-500'></div>
    </div>
  );
};

export default Loading;
