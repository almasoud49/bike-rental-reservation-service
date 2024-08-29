
import { useForm, SubmitHandler } from "react-hook-form";
import { TFormValues } from "../types/formValue.types";
import contact from "../assets/images/contact.jpg"

const ContactForm = () => {
  const { register, handleSubmit } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center py-6">Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className=" shadow-2xl w-full lg:w-1/2 p-4 lg:p-8">
          <img
            src={contact}
            alt="Contact"
            className="object-cover w-full h-96"
          />
        </div>
        
        <div className="bg-gray-100 w-full lg:w-1/2 p-4 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="textarea textarea-bordered w-full"
                placeholder="Enter your message"
                rows={4}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-custom-teal btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

