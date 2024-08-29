import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { TLoginFormInputs } from '../../types/login.type';
import { useLoginMutation } from '../../redux/features/auth/authApi';



const Login = () => {
  const { register, handleSubmit } = useForm<TLoginFormInputs>();
  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const onSubmit: SubmitHandler<TLoginFormInputs> = (data) => {
    login(data).unwrap()
      .then(() => {
        
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="card w-full max-w-md shadow-2xl p-5">
        <h2 className="text-2xl font-bold text-center my-14 mb-5">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              {...register('email', { required: 'Email is required' })}
            />
            
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full"
              {...register('password', { required: 'Password is required' })}
            />
            
          </div>
          <button type="submit" className="btn bg-custom-teal w-full mt-4" disabled={isLoading}>Login</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
        </p>
        {isSuccess && <p className="text-green-500 mt-4">Login successful!</p>}
        
      </div>
    </div>
  );
};

export default Login;