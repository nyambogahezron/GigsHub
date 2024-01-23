import FormInputRow from '../components/FormInputRow';
import { useState, useEffect } from 'react';
import Header from '../components/PageHeader';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const Login = () => {
  useEffect(() => {
    document.title = 'GIGHUB -  Login';
    return () => {
      document.title = 'GIGHUB - Find | Post Jobs';
    };
  }, []);
  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(UserName, UserEmail, password);
  };

  return (
    <main>
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24'>
          <Header headerTitle='Log In' Description='Log in to post gigs' />

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
