import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import OrderTable from "../pages/OrderTable";
import TakeAway from "../pages/TakeAwayPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ItemInfo from "../pages/ItemInfo";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />}></Route>
      <Route
        path={ROUTES.FAKEHOME}
        element={<Navigate to={ROUTES.HOME} />}
      ></Route>
      <Route path={ROUTES.TAKEAWAY} element={<TakeAway />}>
        <Route path={`${ROUTES.TAKEAWAY}/:id`} element={<ItemInfo />}></Route>
      </Route>
      <Route path={ROUTES.ORDERTABLE} element={<OrderTable />}></Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
      <Route path={ROUTES.PROFILE} element={<ProfilePage />}></Route>
    </Routes>
  );
};

export default Router;
