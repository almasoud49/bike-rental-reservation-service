import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { useGetMyProfileQuery } from "../../../redux/api/auth/authApi";
import { useState } from "react";
import { useGetSingleBikeQuery } from "../../../redux/api/bikeApi";
import BSpinner from "../../ui/BSpinner";
import BStarRating from "../../form/BStarRating";
import BButtonSmall from "../../ui/BButtonSmall";
import BNoData from "../../ui/BNoData";
import BForm from "../../form/BForm";
import BTimePicker from "../../form/BTimePicker";
import { Modal } from "antd";
const schema = z.object({
  startTime: z.unknown().refine((value) => value, {
    message: "Start Time is required",
  }),
});

const BikeDetail = () => {
  const navigate = useNavigate();
  const { data: profileData } = useGetMyProfileQuery(undefined);

  const { bikeId } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const showBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleBookingModalCancel = () => {
    setIsBookingModalOpen(false);
  };

  const { data, isFetching } = useGetSingleBikeQuery(bikeId);
  if (isFetching) {
    return <BSpinner mgT="120" />;
  }
  const bikeData = data?.data;
  const {
    name,
    image,
    pricePerHour,
    cc,
    brand,
    model,
    year,
    description,
    isAvailable,
    _id,
  } = bikeData;

  // handle book a bike
  const handleBook: SubmitHandler<FieldValues> = (data) => {
    const bookingData = {
      startTime: data?.startTime?.format("HH:mm"),
      userId: profileData?.data?._id,
      bikeId: _id,
    };
    navigate("/dashboard/user/payment", { state: { bookingData, bikeData } });
  };

  return (
    <div>

      {bikeData ? (
        <div className="flex xl:flex-row flex-col gap-14 dark:text-gray-300">
          <div>
            <img className="md:w-[500px]" src={image} alt="" />
          </div>
          <div className="md:space-y-6 space-y-4 md:w-[500px]">
            <h3 className="md:text-4xl text-[27px] font-semibold capitalize ">
              {name}
            </h3>
            {/* showing rating */}
            <div className="flex items-center gap-2">
              <BStarRating value={4.6} />
              <p className="text-sm text-gray-400">(32 reviews)</p>
            </div>
            {/* product price */}
            <h3 className="md:text-5xl text-3xl font-semibold text-primaryColor dark:text-gray-300">
              ${pricePerHour}
            </h3>

            {/* description */}
            <p>
             
              {description}
            </p>
            {/* other info */}
            <div className="space-y-2">
              <p>
                <strong>Engine: </strong>
                {cc} CC
              </p>
              <p>
                <strong>Model: </strong>
                {model}({year})
              </p>
              <p>
                <strong>Brand: </strong>
                {brand}
              </p>
              <p>
                <strong>Availability: </strong>
                {isAvailable ? "Available" : "Unavailable"}
              </p>
            </div>
            <BButtonSmall
              tooltipTxt={isAvailable ? "" : "This bike is unavailable"}
              onClick={showBookingModal}
              disabled={!isAvailable}
            >
              Book now
            </BButtonSmall>
          </div>
        </div>
      ) : (
        <BNoData />
      )}
      {/* handle book now with modal */}
      <div>
        <Modal
          footer={null}
          title="Start adventure!"
          open={isBookingModalOpen}
          onCancel={handleBookingModalCancel}
        >
          <div>
            <BForm resolver={zodResolver(schema)} handleFormSubmit={handleBook}>
              <BTimePicker
                label="Start Time*"
                name="startTime"
                placeholder=""
              />
              <BButtonSmall type="submit">Submit</BButtonSmall>
            </BForm>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default BikeDetail;