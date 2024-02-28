import FormInputRow from '../components/FormInputRow';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/PageHeader';
import CustomButton from '../components/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateCompanyMutation } from '../slices/companyApiSlice';
import { setCompanyInfo } from '../slices/companySlice';

const EditCompanyProfile = () => {
  useEffect(() => {
    document.title = 'GIGSHUB - Edit Company Profile';
    return () => {
      document.title = 'GIGSHUB - Find | Post Jobs';
    };
  }, []);
  const [Company, setCompany] = useState('');
  const [Location, setLocation] = useState('');
  const [Email, setEmail] = useState('');
  const [Website, setWebsite] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [Logo, setLogo] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateCompany, { isLoading }] = useUpdateCompanyMutation();

  const { companyInfo } = useSelector((state) => state.company);

  useEffect(() => {
    const { email, location, name, phoneNumber, website } = companyInfo;
    setCompany(name);
    setEmail(email);
    setLocation(location);
    setPhoneNumber(phoneNumber);
    setWebsite(website);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const companyId = companyInfo._id;
    console.log(companyId);

    try {
      const res = await updateCompany(
        {
          name: Company,
          email: Email,
          phoneNumber,
          website: Website,
          location: Location,
          id: companyId,
        },
        companyId
      ).unwrap();

      await dispatch(setCompanyInfo({ ...res.company }));
      console.log(res);
      toast.info(res.msg);
      // navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.msg || err.error);
    }
  };
  return (
    <main>
      <div className='mx-4'>
        <div className='bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24'>
          <Header headerTitle='Edit Gig' />

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
              type='number'
              name='phoneNumber'
              value={phoneNumber}
              handleChange={(e) => setPhoneNumber(e.target.value)}
              labelText='Phone Number'
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
              // value={Logo}
              // handleChange={(e) => setLogo(e.target.value)}
            />

            <CustomButton btnText='Edit Company' />
          </form>
        </div>
      </div>
    </main>
  );
};
export default EditCompanyProfile;
