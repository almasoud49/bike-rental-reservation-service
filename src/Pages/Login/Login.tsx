// import { useForm, SubmitHandler } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { TLoginFormInputs } from '../../types/login.type';
// import { useLoginMutation } from '../../redux/features/auth/authApi';



// const Login = () => {
//   const { register, handleSubmit } = useForm<TLoginFormInputs>();
//   const [login, { isLoading, isSuccess }] = useLoginMutation();

//   const onSubmit: SubmitHandler<TLoginFormInputs> = (data) => {
//     login(data).unwrap()
//       .then(() => {
        
//       })
//       .catch((err) => {
//         console.log(err)
//       });
//   };

//   return (
//     <div className="flex justify-center items-center ">
//       <div className="card w-full max-w-md shadow-2xl p-5">
//         <h2 className="text-2xl font-bold text-center my-14 mb-5">Login</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div className="form-control">
//             <label className="label" htmlFor="email">Email</label>
//             <input
//               id="email"
//               type="email"
//               className="input input-bordered w-full"
//               {...register('email', { required: 'Email is required' })}
//             />
            
//           </div>
//           <div className="form-control">
//             <label className="label" htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               className="input input-bordered w-full"
//               {...register('password', { required: 'Password is required' })}
//             />
            
//           </div>
//           <button type="submit" className="btn bg-custom-teal w-full mt-4" disabled={isLoading}>Login</button>
//         </form>
//         <p className="text-center mt-4">
//           Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
//         </p>
//         {isSuccess && <p className="text-green-500 mt-4">Login successful!</p>}
        
//       </div>
//     </div>
//   );
// };

// export default Login;


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