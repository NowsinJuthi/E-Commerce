import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const AdminRoute = () => {
  const location = useLocation();
  const token = Cookies.get("token");
  const role = Cookies.get("role");

  console.log("AdminRoute check -> token:", token, "role:", role);

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (String(role) !== "1") {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
