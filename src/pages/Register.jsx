import FormInputRow from "../components/FormInputRow";
import { useState, useEffect } from "react";
import Header from "../components/PageHeader";
import CustomButton from "../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";

const Register = () => {
  // set page title
  useEffect(() => {
    document.title = "GIGS-HUB -  Register";
    return () => {
      document.title = "GIGS-HUB - Find | Register";
    };
  }, []);

  // get form data
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("Job Seeker");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!UserName || !UserEmail || !password || !ConfirmPassword) {
      toast.error("Please enter all fields");
      return;
    }

    if (password !== ConfirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const formData = new FormData();
        formData.append("name", UserName);
        formData.append("email", UserEmail);
        formData.append("profileImage", image);
        formData.append("password", password);
        formData.append("role", role);

        const res = await register(formData).unwrap();
        console.log(res);
        dispatch(setCredentials({ ...res.user }));
        toast.info(res.msg);
        navigate("/home");
      } catch (err) {
        console.log(err);
        if (err.data.msg == "Please Provide name,Please Provide Email") {
          toast.error("Please enter all fields");
        } else {
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
            {/* role select  */}
            <div className='max-w-md mx-auto py-4 rounded-md mb-2 '>
              <label className='block text-gray-600 font-bold mb-2'>
                Choose Your Role:
              </label>
              <select
                className='block w-full mt-1'
                onChange={(e) => setRole(e.target.value)}
              >
                <option value='Job Seeker'>Job Seeker</option>
                <option value='Employer'>Employer</option>
              </select>
            </div>
            {/* image upload  */}
            <div className=''>
              <label className='block text-gray-700 font-bold mb-3'>
                {role === "Job Seeker"
                  ? "Upload Profile Picture"
                  : "Upload Logo"}
              </label>
              <div className='max-w-md mx-auto bg-white py-6 px-2 rounded-md shadow-md mb-5'>
                <input
                  name='profileImage'
                  type='file'
                  accept='image/*'
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {/* show selected image */}
                {image instanceof File && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt='preview'
                    className='mt-2'
                  />
                )}
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
