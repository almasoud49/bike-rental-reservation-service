import { Divider } from "antd";
import moment from "moment";
import { useState } from "react";
import { useGetMyProfileQuery } from "../../../redux/api/auth/authApi";
import BSpinner from "../../ui/BSpinner";
import BNoData from "../../ui/BNoData";
import BButtonSmallWhite from "../../ui/BButtonSmallWhite";
import UpdateProfileModal from "./UpdateProfileModal";
import profileImage from "../../../assets/user.jpg"; 


const Profile = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { data, isFetching } = useGetMyProfileQuery(undefined);

  if (isFetching) {
    return <BSpinner mgT="150" />;
  }

  if (!data?.success || !data?.data) {
    return <BNoData />;
  }

  const { name, email, phone, address, role, createdAt, updatedAt } = data.data;

  // manage update profile
  const showUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="md:pt-10 pt-5">

      {data?.success ? (
        <>
          <h4 className="md:text-3xl text-xl font-semibold text-center dark:text-gray-300">
            Welcome, <span className="text-accentColor">{name}!</span> It's
            great to see you again!
          </h4>
          <div className="xl:w-[900px] mx-auto mt-12 bg-white dark:bg-darkPrimary dark:text-gray-300">
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div
                style={{ backgroundImage: `url(${profileImage})` }}
                className="col-span-1 border dark:border-lightBorder text-center text-white"
              >
                <div className="bg-black bg-opacity-20 md:h-[500px] py-8 px-4 flex flex-col justify-center items-center">
                  <div className="flex md:flex-col flex-row md:text-center text-left gap-4 items-center md:mb-10 mb-6">
                    <div>
                      <img
                        className="lg:w-[50%] md:w-[40%] w-[70px] mx-auto rounded-full"
                        src={
                          "https://img.freepik.com/free-photo/portrait-hapy-young-smart-man-glasses-white-wall_231208-12206.jpg?t=st=1727148038~exp=1727151638~hmac=a1409074ca38354fd06013ee431ea11344089c70265aab57df30ce2968bc4b4b&w=360"
                        }
                        alt=""
                      />
                    </div>
                    <div className="md:space-y-3 space-y-1">
                      <h5 className="md:text-lg text-[17px] md:uppercase font-semibold md:mt-4">
                        {name}
                      </h5>
                      <p className="uppercase font-medium md:mb-14 md:mt-3">
                        {role}
                      </p>
                    </div>
                  </div>
                  <BButtonSmallWhite onClick={showUpdateModal}>
                    Edit Profile
                  </BButtonSmallWhite>
                  {/* show update modal */}
                  <UpdateProfileModal
                    userInfo={{ name, phone, address }}
                    isModalOpen={isUpdateModalOpen}
                    setIsModalOpen={setIsUpdateModalOpen}
                  />
                </div>
              </div>
              <div className="col-span-2 border dark:border-lightBorder lg:h-[500px] md:py-8 py-5 lg:px-12 md:px-10 px-6">
                <div>
                  <h4 className="font-semibold text-xl">
                    Personal Information
                  </h4>
                  <Divider className="my-2 dark:bg-lightBorder" />
                  <div className="grid md:grid-cols-2 gap-4 gap-y-8 pt-2">
                    <div>
                      <h5 className="font-semibold text-[17px]">Email</h5>
                      <p>{email}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[17px]">Phone</h5>
                      <p>{phone}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[17px]">Address</h5>
                      <p>{address}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="font-semibold text-xl">Others</h4>
                  <Divider className="my-2 dark:bg-lightBorder" />
                  <div className="grid md:grid-cols-2 gap-4 gap-y-8 pt-2">
                    <div>
                      <h5 className="font-semibold text-[17px]">
                        Registration Date
                      </h5>
                      <p>{moment(createdAt).format("D, MMMM, YYYY")}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[17px]">
                        Last Updated
                      </h5>
                      <div>
                        {createdAt === updatedAt ? (
                          <p className="text-secondaryColor">Not updated yet</p>
                        ) : (
                          <p>{moment(updatedAt).format("D, MMMM, YYYY")}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <BNoData />
      )}
    </div>
  );
};

export default Profile;