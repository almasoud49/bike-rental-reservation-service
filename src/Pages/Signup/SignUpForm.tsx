import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSignupMutation } from '../../redux/features/auth/authApi';
import { TSignUpFormInputs } from '../../types/signUp.type';


const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TSignUpFormInputs>();
  const [signup, { isLoading, isSuccess }] = useSignupMutation();

  const onSubmit: SubmitHandler<TSignUpFormInputs> = (data) => {
    signup(data).unwrap()
      .then(() => {
        
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className="flex justify-center items-center pt-10 ">
      <div className="card w-full max-w-md shadow-2xl p-5">
        <h2 className="text-3xl font-bold text-center mb-5 my-14">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="input input-bordered w-full"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input input-bordered w-full"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="input input-bordered w-full"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              className="input input-bordered w-full"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              className="input input-bordered w-full"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
          </div>
          <button type="submit" className="btn bg-custom-teal w-full mt-4" disabled={isLoading}>Sign Up</button>
        </form>
        <p className="text-center mt-4 ">
          Already have an account? <Link to="/login" className="text-primary">Please login</Link>
        </p>
        {isSuccess && <p className="text-green-500 mt-4">Sign up successful!</p>}
        
      </div>
    </div>
  );
};

export default SignUpForm;
