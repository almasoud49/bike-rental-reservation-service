import { Modal, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { Dispatch } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBikeMutation } from "../../../redux/api/bikeApi";
import handleMutation from "../../../utils/handleMutation";
import BForm from "../../form/BForm";
import { bikeValidationSchema } from "../../../validation";
import BInput from "../../form/BInput";
import BSelect from "../../form/BSelect";
import BTextArea from "../../form/BTextArea";
import BButtonSmall from "../../ui/BButtonSmall";
import { ccOptions } from "../../../constant/global.constant";


type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const CreateBikeModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const [createBike] = useCreateBikeMutation();

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // handle create a bike
  const handleCreateBike: SubmitHandler<FieldValues> = (data) => {
    const onSuccess = () => {
      setIsModalOpen(false);
    };
    const bikeData = {
      ...data,
      cc: Number(data.cc),
      year: Number(data.year),
      pricePerHour: Number(data.pricePerHour),
    };
    handleMutation(bikeData, createBike, "Bike is being created...", onSuccess);
  };

  return (
    <div>
      <Modal
        className="lg:min-w-[800px] w-full"
        footer={null}
        title="Create a Bike"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <BForm
            resolver={zodResolver(bikeValidationSchema)}
            handleFormSubmit={handleCreateBike}
          >
            <Row gutter={15}>
              <BInput
                colSpanLg={12}
                name="name"
                label="Name"
                placeholder="Enter bike name"
              />
              <BInput
                colSpanLg={12}
                name="image"
                label="Image URL"
                placeholder="Enter bike image"
              />
              <BInput
                colSpanLg={12}
                name="pricePerHour"
                label="Price(hourly)"
                placeholder="Enter rent price"
              />
              <BInput
                colSpanLg={12}
                name="brand"
                label="Brand"
                placeholder="Enter bike brand"
              />
              <BInput
                colSpanLg={12}
                name="model"
                label="Model"
                placeholder="Enter bike model"
              />
              <BInput
                colSpanLg={12}
                name="year"
                label="Year"
                placeholder="Enter bike year"
              />
              <BSelect
                options={ccOptions}
                name="cc"
                label="Engine(CC)"
                placeholder="Enter bike engine capacity"
              />
            </Row>
            <BTextArea
              rows={3}
              name="description"
              label="Description"
              placeholder="Enter bike description"
            />

            <BButtonSmall type="submit">Submit</BButtonSmall>
          </BForm>
        </div>
      </Modal>
    </div>
  );
};

export default CreateBikeModal;