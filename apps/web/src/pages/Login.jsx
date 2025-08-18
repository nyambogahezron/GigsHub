import FormInputRow from '../components/FormInputRow';
import { useState, useEffect } from 'react';
import Header from '../components/PageHeader';
import { toast } from 'react-toastify';
import CustomButton from '../components/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';

const Login = () => {
  useEffect(() => {
    document.title = 'GIGSHUB -  Login';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);
  const [UserEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email: UserEmail, password }).unwrap();
      dispatch(setCredentials({ ...res.user }));
      toast.info(res.msg);
      navigate('/home');
    } catch (err) {
      console.log(err);
      if (
        err.data.msg ==
        'Please provide Name,Please provide email,Please provide password'
      ) {
        toast.error('Please enter all fields');
      } else {
        toast.error(err?.data?.msg || err.error);
      }
    }
  };

  return (
    <main>
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24'>
          <Header headerTitle='Log In' Description='Log in to post gigs' />

          <form onSubmit={submitHandler}>
            <FormInputRow
              type='email'
              name='email'
              value={UserEmail}
              handleChange={(e) => setUserEmail(e.target.value)}
              placeHolder='Enter Email'
            />
            <FormInputRow
              type='password'
              name='password'
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
              placeHolder='Enter Password'
            />
            <CustomButton btnText='Login' />

            <div className='mt-8'>
              <p>
                Dont have an account?
                <Link to='/register' className='text-primary-color'>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Login;
