import loadingImg from "../../assets/loading.jpg";
const BSpinner = ({ mgT }: { mgT?: string }) => {
  return (
    <div style={{ marginTop: `${mgT}px` }}>
      <img className="w-[120px] mx-auto" src={loadingImg} alt="" />
    </div>
  );
};

export default BSpinner;