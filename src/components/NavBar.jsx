import {
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from "react-icons/fa6";
import { toast } from 'react-toastify';

import { Link ,useNavigate} from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { companyInfo } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = userInfo?.userId;

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall({ userId }).unwrap();
      dispatch(logout());
      navigate('/login');
      toast.info("Logged Out Successful")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="flex justify-between items-center mb-4 p-4 border-b">
      <Logo />
      <ul className="flex space-x-6 mr-6 text-lg">
      { !userInfo ? (
        <>
        <li>
          <Link
            to="/register"
            className="flex align-baseline items-baseline space-x-1 hover:text-primary-color"
          >
            <span>
              <FaArrowRightFromBracket />{" "}
            </span>
            <span>Register </span>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="flex align-baseline items-baseline space-x-1 hover:text-primary-color"
          >
            <span>
              <FaArrowRightToBracket />
            </span>
            <span>Login</span>
          </Link>
        </li>
        </>
        ) : (
        <>
        <li>
          <Link
            to="/profile"
            className="flex align-baseline items-baseline space-x-1 hover:text-primary-color"
          >
            <span>Profile</span>
          </Link>
        </li>
        { companyInfo ? (
        <li>
          <Link
            to="/manage"
            className="flex align-baseline items-baseline space-x-1 hover:text-primary-color"
          >
            <span>Dashboard</span>
          </Link>
        </li> ) : ( "" )}
        <li>
          <Link
            to="#" onClick={logoutHandler}
            className="flex align-baseline items-baseline space-x-1 hover:text-primary-color"
          >
            <span>
              <FaArrowRightToBracket />
            </span>
            <span>Logout</span>
          </Link>
        </li>
        </>
        )}
      </ul>
    </nav>
  );
};
export default NavBar;
