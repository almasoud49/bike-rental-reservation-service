import { Modal } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import React, { Dispatch, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReturnBikeMutation } from "../../../redux/api/rentalApi";
import handleMutation from "../../../utils/handleMutation";
import BForm from "../../form/BForm";
import BTimePicker from "../../form/BTimePicker";
import BButtonSmall from "../../ui/BButtonSmall";


const schema = z.object({
  endTime: z.unknown().refine((value) => value, {
    message: "End Time is required",
  }),
});

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  rentalId: string;
};

const CalculateRentalCostModel = ({
  isModalOpen,
  setIsModalOpen,
  rentalId,
}: TModalProps) => {
  const [reset, setReset] = useState(false);
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };
  const [returnBike] = useReturnBikeMutation();

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    const onSuccess = () => {
      setIsModalOpen(false);
      setReset(true);
    };
    const rentalEndTime = data?.endTime?.format("HH:mm");
    handleMutation(
      { rentalEndTime, rentalId },
      returnBike,
      "Bike is returning...",
      onSuccess
    );
  };

  return (
    <div>
      <Modal
        footer={null}
        title="Calculate rental cost!"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <div>
          <BForm
            reset={reset}
            resolver={zodResolver(schema)}
            handleFormSubmit={handleFormSubmit}
          >
            <BTimePicker
              label="End Time*"
              name="endTime"
              placeholder="Select end time"
            />
            <BButtonSmall type="submit">Calculate</BButtonSmall>
          </BForm>
        </div>
      </Modal>
    </div>
  );
};

export default CalculateRentalCostModel;