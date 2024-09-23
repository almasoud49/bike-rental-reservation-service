import { Modal } from "antd";
import React, { Dispatch } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateMyProfileMutation } from "../../../redux/api/auth/authApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BInput from "../../form/BInput";
import BForm from "../../form/BForm";
import handleMutation from "../../../utils/handleMutation";
import BButtonSmall from "../../ui/BButtonSmall";


const dataValidationSchema = z.object({
  name: z.string().nonempty("Name is required!"),
  phone: z.string().nonempty("Phone number is required!"),
  address: z.string().nonempty("Address is required!"),
});
type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  userInfo: {
    name: string;
    phone: string;
    address: string;
  };
};

const UpdateProfileModal = ({
  isModalOpen,
  setIsModalOpen,
  userInfo,
}: TModalProps) => {
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // handle form submit
  const handleUpdateProfile: SubmitHandler<FieldValues> = (data) => {
    const onSuccess = () => {
      setIsModalOpen(false);
    };
    const onFailure = () => {
      setIsModalOpen(false);
    };
    handleMutation(
      data,
      updateMyProfile,
      "Profile is being updated...",
      onSuccess,
      onFailure
    );
  };

  return (
    <div>
      <Modal
        className="lg:min-w-[600px]"
        footer={null}
        title="Update Profile"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <BForm
            defaultValues={userInfo}
            handleFormSubmit={handleUpdateProfile}
            resolver={zodResolver(dataValidationSchema)}
          >
            <BInput label="Name" name="name" placeholder="enter your name" />
            <BInput
              label="Phone"
              name="phone"
              placeholder="enter your phone number"
            />
            <BInput
              label="Address"
              name="address"
              placeholder="enter your address"
            />
            <BButtonSmall type="submit">Update</BButtonSmall>
          </BForm>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;