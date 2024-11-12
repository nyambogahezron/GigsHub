import FormInputRow from '../components/FormInputRow';
import { useState, useEffect } from 'react';
import Header from '../components/PageHeader';
import CustomButton from '../components/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Profile = () => {
  useEffect(() => {
    document.title = 'GIGSHUB -  Profile';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);
  const { userInfo } = useSelector((state) => state.auth);
  const [UserName, setUserName] = useState(userInfo?.name || '');
  const [UserEmail, setUserEmail] = useState(userInfo?.email || '');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
 

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== ConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    const res = await fetch('http://localhost:5000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UserName, UserEmail, password }),
    });
    const data = await res.json();
    }
  
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
