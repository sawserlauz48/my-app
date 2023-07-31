import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const LogoutPage = () => {
  const navigate = useNavigate;
  return navigate(ROUTES.HOME);
};
export default LogoutPage;
