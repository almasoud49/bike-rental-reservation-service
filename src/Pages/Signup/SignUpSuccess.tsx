
import BButtonSmall from "../../components/ui/BButtonSmall";

const SignUpSuccess = () => {
  return (
    
      <div className="text-center md:py-24 py-16">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-8">
          Account Created Successfully!
        </h1>
        <p className="mb-5">
          Please, login with the credentials to continue with the next
          adventures
        </p>
        <BButtonSmall link={`/login`}>Go To Login</BButtonSmall>
      </div>
    
  );
};

export default SignUpSuccess;