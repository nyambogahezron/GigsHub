const CustomButton = ({ btnText }) => {
  return (
    <div className='mb-6 mx-auto flex items-center justify-center'>
      <button className='bg-primary-color transition-all w-full  text-white rounded py-2 px-4 hover:bg-black'>
        {btnText}
      </button>
    </div>
  );
};
export default CustomButton;
