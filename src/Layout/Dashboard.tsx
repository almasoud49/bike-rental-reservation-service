import DashboardLayout from "../components/dashboard/dashboard/DashboardLayout";
import { useGetCurrentMode } from "../redux/features/themeSlice";
import { useAppSelector } from "../redux/hooks";
import ProtectedRoute from "../routes/ProtectedRoute";

const Dashboard = () => {
  const mode = useAppSelector(useGetCurrentMode);
  return (
    <div className={`${mode || "light"} bg-white dark:bg-primaryColor`}>
      <ProtectedRoute role={undefined}>
        <DashboardLayout />
      </ProtectedRoute>
    </div>
  );
};

export default Dashboard;