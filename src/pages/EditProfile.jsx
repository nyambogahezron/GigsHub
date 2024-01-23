import FormInputRow from '../components/FormInputRow';
import { useState, useEffect } from 'react';
import Header from '../components/PageHeader';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

const Profile = () => {
  useEffect(() => {
    document.title = 'GIGHUB -  Profile';
    return () => {
      document.title = 'GIGHUB - Find | Post Jobs';
    };
  }, []);
  const [UserName, setUserName] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(UserName, UserEmail, password);
  };
  return (
    <main>
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24'>
          <Header headerTitle='Profile' Description='Edit Your Profile' />
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
            <FormInputRow
              type='password'
              labelText='Confirm Password'
              name='confirmPassword'
              value={ConfirmPassword}
              handleChange={(e) => setConfirmPassword(e.target.value)}
              placeHolder='Confirm Password'
            />

            <CustomButton btnText='Edit Profile' />

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
export default Profile;
