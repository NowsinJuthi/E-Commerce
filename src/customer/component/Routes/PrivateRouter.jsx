import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRouter = () => {
  const location = useLocation();
  const token = Cookies.get("token");
  return token ? <Outlet /> : <Navigate to="/login" replace  state={{ from: location }}  />;
};

export default PrivateRouter;
