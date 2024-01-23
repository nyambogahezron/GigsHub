import FormInputRow from '../components/FormInputRow';
import { useState } from 'react';
import Header from '../components/PageHeader';

const CreateCompanyProfile = () => {
  const [Company, setCompany] = useState('');
  const [Location, setLocation] = useState('');
  const [Email, setEmail] = useState('');
  const [Website, setWebsite] = useState('');
  const [Logo, setLogo] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(Company, Location, Email, Website);
  };
  return (
    <main>
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24'>
          <Header
            headerTitle='Create a Gig'
            Description='Post a gig to find a developer'
          />

          <form onSubmit={submitHandler}>
            <FormInputRow
              type='text'
              name='company'
              value={Company}
              handleChange={(e) => setCompany(e.target.value)}
              placeHolder=' Enter Company Name'
              labelText='Company Name'
            />
            <FormInputRow
              type='text'
              name='location'
              value={Location}
              handleChange={(e) => setLocation(e.target.value)}
              placeHolder='Example: Remote, Boston MA, etc'
              labelText='Location'
            />
            <FormInputRow
              type='text'
              name='email'
              value={Email}
              handleChange={(e) => setEmail(e.target.value)}
              labelText='Contact Email'
            />
            <FormInputRow
              type='text'
              name='website'
              value={Website}
              handleChange={(e) => setWebsite(e.target.value)}
              labelText='Website/Application URL'
            />

            <FormInputRow
              type='file'
              name='logo'
              value={Logo}
              handleChange={(e) => setLogo(e.target.value)}
            />

            <div className='mb-6'>
              <button className='bg-primary-color text-white rounded py-2 px-4 hover:bg-black'>
                Create Company
              </button>
              <a href='/' className='text-black ml-4'>
                {' '}
                Back{' '}
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
export default CreateCompanyProfile;
