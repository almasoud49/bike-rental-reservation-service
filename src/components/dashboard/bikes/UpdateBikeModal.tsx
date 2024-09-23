import { Modal, Row } from "antd";
import { useGetSingleBikeQuery, useUpdateBikeMutation } from "../../../redux/api/bikeApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import handleMutation from "../../../utils/handleMutation";
import BSpinner from "../../ui/BSpinner";
import BForm from "../../form/BForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { bikeValidationSchema } from "../../../validation";
import BInput from "../../form/BInput";
import BSelect from "../../form/BSelect";
import { ccOptions } from "../../../constant";
import BTextArea from "../../form/BTextArea";
import BButtonSmall from "../../ui/BButtonSmall";
import BNoData from "../../ui/BNoData";
import React, { Dispatch } from "react";


type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  bikeId: string;
};

const UpdateBikeModal = ({
  isModalOpen,
  setIsModalOpen,
  bikeId,
}: TModalProps) => {
  const [updateBike] = useUpdateBikeMutation();
  const { data, isFetching } = useGetSingleBikeQuery(bikeId || undefined, {
    refetchOnMountOrArgChange: true,
  });
  const bikeData = data?.data;
  const defaultValues = {
    brand: bikeData?.brand,
    cc: bikeData?.cc,
    description: bikeData?.description,
    image: bikeData?.image,
    model: bikeData?.model,
    name: bikeData?.name,
    pricePerHour: bikeData?.pricePerHour,
    year: bikeData?.year,
  };

  const handleModalCancel = () => {
    // refetch();
    setIsModalOpen(false);
  };

  // handle update bike
  const handleUpdateBike: SubmitHandler<FieldValues> = (data) => {
    const bikeData = {
      ...data,
      cc: Number(data.cc),
      year: Number(data.year),
      pricePerHour: Number(data.pricePerHour),
    };
    const onSuccess = () => {
      setIsModalOpen(false);
    };
    handleMutation(
      { bikeData, bikeId },
      updateBike,
      "Bike is updating...",
      onSuccess
    );
  };

  return (
    <div>
      <Modal
        className="lg:min-w-[800px] w-full min-h-[400px]"
        footer={null}
        title="Update a Bike"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div className=" min-h-[400px] flex items-center justify-center">
          {isFetching ? (
            <BSpinner />
          ) : bikeData ? (
            <BForm
              resolver={zodResolver(bikeValidationSchema)}
              handleFormSubmit={handleUpdateBike}
              defaultValues={defaultValues}
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

              <BButtonSmall type="submit">Update</BButtonSmall>
            </BForm>
          ) : (
            <BNoData />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBikeModal;