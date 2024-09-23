
import { FieldValues, SubmitHandler } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { TJwtPayload, TResponse } from "../../types/global.type";
import { addUser } from "../../redux/features/authSlice";
import handleMutation from "../../utils/handleMutation";
import BForm from "../../components/form/BForm";
import BButtonSmall from "../../components/ui/BButtonSmall";
import BInput from "../../components/form/BInput";
import { TUser } from "../../types/user.type";



const Login = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSuccess = (res: TResponse<TUser>) => {
    const token = res.token;
    const { email, role } = jwtDecode(token!) as TJwtPayload;

    const user = { email, role };
    const payload = { token, user };
    dispatch(addUser(payload));
    if (location?.state?.targetPath) {
      return navigate(location?.state?.targetPath, { replace: true });
    }
    return navigate(`/dashboard/${role}`, { replace: true });
  };
  const handleForm: SubmitHandler<FieldValues> = (data) => {
    handleMutation(data, login, "User is being logged in...", onSuccess);
  };
  return (
    <div className="md:py-24 py-16">

      
        <div className="md:w-[600px] mx-auto">
          <BForm
            handleFormSubmit={handleForm}
          >
            <BInput label="Email" name="email" placeholder="Enter your email" />
            <BInput
              label="Password"
              name="password"
              placeholder="Enter your password"
            />
            <BButtonSmall type="submit">Login</BButtonSmall>
          </BForm>
          <div className="mt-6">
            <p>
              Don not have an account?{" "}
              <Link
                className="underline font-medium hover:text-accentColor duration-200"
                to={"/sign-up"}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default Login;