import BButtonSmall from "../../ui/BButtonSmall";


const AdvancePaymentFailure = () => {
  return (
   
      <div className="text-center md:py-24 py-16 lg:w-[850px] mx-auto">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-8">
          Payment Failed 😕
        </h1>
        <p className="mb-5">
          Unfortunately, something went wrong with your payment, and we couldn't
          process your booking. Please double-check your payment details and try
          again. If the issue persists, feel free to contact our support team
          for assistance. We're here to help you get back on track!
        </p>
        <BButtonSmall link={`/dashboard/user/bikes`}>All Bikes</BButtonSmall>
      </div>
    
  );
};

export default AdvancePaymentFailure;