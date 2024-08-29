import { SpinWheel } from "react-spin-wheel";
import "react-spin-wheel/dist/index.css";

const Coupon = () => {
  return (
    <>
        <h1 className="text-4xl text-center py-6 font-bold">Coupons & Discounts</h1>
      <SpinWheel
        items={[
          "5% for 10 hours",
          "10% for 20 hours",
          "15% for 30 hours",
          "20% for 40 hours",
          "25% for 50 hours",
          "30% for 60 hours",
          "35% for 70 hours",
          "40% for 80 hours",
          "45% for 90 hours",
          "50% for 100 hours",
        
        ]}
        onFinishSpin={(item) => {
          alert(item);
        }}
      />
    </>
  );
};

export default Coupon;
