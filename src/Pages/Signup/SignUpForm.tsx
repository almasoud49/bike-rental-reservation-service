
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../redux/api/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/authSlice";
import handleMutation from "../../utils/handleMutation";
import BForm from "../../components/form/BForm";
import BInput from "../../components/form/BInput";
import BButtonSmall from "../../components/ui/BButtonSmall";
import { signValidationSchema } from "../../validation/signup.validation";



const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSuccess = () => {
    dispatch(logOut());
    return navigate("/sign-up-success", { replace: true });
  };
  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    handleMutation(data, signUp, "User is being created...", onSuccess);
  };

  return (
    <div className="md:py-24 py-16">

      
        <div className="md:w-[600px] mx-auto">
          <BForm
            resolver={zodResolver(signValidationSchema)}
            handleFormSubmit={handleFormSubmit}
          >
            <BInput label="Name" name="name" placeholder="enter your name" />
            <BInput label="Email" name="email" placeholder="enter your email" />
            <BInput
              label="Phone"
              name="phone"
              placeholder="enter your phone number"
            />
            <BInput
              label="Password"
              name="password"
              placeholder="enter a password"
            />
            <BInput
              label="Address"
              name="address"
              placeholder="enter your address"
            />
            <BButtonSmall type="submit">Submit</BButtonSmall>
          </BForm>
          <div className="mt-6">
            <p>
              Already have an account?{" "}
              <Link
                className="underline font-medium hover:text-accentColor duration-200"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default SignUp;
