import FormInputRow from '../components/FormInputRow';
import { useState, useEffect } from 'react';
import Header from '../components/PageHeader';
import CustomButton from '../components/CustomButton';
import { Link,  useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';

const Register = () => {
  useEffect(() => {
    document.title = 'GIGHUB -  Register';
    return () => {
      document.title = 'GIGHUB - Find | Post Jobs';
    };
  }, []);
  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [role, setRoleEmail] = useState('Job Seeker');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);


  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== ConfirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name:UserName, email:UserEmail, password, role }).unwrap();
        dispatch(setCredentials({ ...res.user }));
        console.log(res)
         toast.info(res.msg)
        navigate('/home');
      } catch (err) {
        console.log(err)
        if (err.data.msg == 'Please Provide name,Please Provide Email'){
          toast.error('Please enter all fields');
        } else{

        toast.error(err?.data?.msg || err.error);
      }
      }
    }
  };
  return (
    <main>
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24'>
          <Header
            headerTitle='Register'
            Description='Create an account to post gig'
          />
          <form onSubmit={submitHandler}>
            <FormInputRow
              type='text'
              name='name'
              value={UserName}
              handleChange={(e) => setUserName(e.target.value)}
              placeHolder='Enter Name'
            />
            <FormInputRow
              type='email'
              name='email'
              value={UserEmail}
              handleChange={(e) => setUserEmail(e.target.value)}
              placeHolder='Enter Email'
            />

        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mb-5">
          <label className="block text-gray-700 font-bold mb-2">Choose Your Role:</label>
          <div className="flex items-center mb-4">
            {/* Option 1: */}
            <input type="radio" id="jobSeeker" name="roles" defaultValue="Job Seeker" checked className="mr-2"
             onChange={(e) => setRoleEmail(e.target.value)}/>
            <label htmlFor="jobSeeker" className="text-gray-700">Job Seeker</label>
          </div>
          <div className="flex items-center">
            {/* Option 2: */}
            <input type="radio" id="option2" name="roles" defaultValue="Employer" className="mr-2" 
            onChange={(e) => setRoleEmail(e.target.value)}/>
            <label htmlFor="option2" className="text-gray-700">Employeer</label>
          </div>
        </div>
     
            <FormInputRow
              type='password'
              name='password'
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
              placeHolder='Enter Password'
            />
            <FormInputRow
              type='password'
              labelText='Confirm Password'
              name='confirmPassword'
              value={ConfirmPassword}
              handleChange={(e) => setConfirmPassword(e.target.value)}
              placeHolder='Confirm Password'
            />

            <CustomButton btnText='Register' />

            <div className='mt-8'>
              <p>
                Already have an account?
                <Link to='/login' className='text-primary-color'>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Register;
