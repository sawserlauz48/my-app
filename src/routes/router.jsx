import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TakeAway from "../pages/TakeAwayPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import ItemInfo from "../pages/ItemInfo";
import Checkout from "../pages/Checkout";
import AddItem from "../pages/AddItem";
import EditItemPage from "../pages/EditItemPage";
import Orders from "../pages/Orders";

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
        <Route
          path={`${ROUTES.TAKEAWAY}/${ROUTES.ADDITEM}`}
          element={<AddItem />}
        ></Route>
        <Route
          path={`${ROUTES.TAKEAWAY}/${ROUTES.EDITITEM}/:id`}
          element={<EditItemPage />}
        ></Route>
      </Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />}></Route>
      <Route path={ROUTES.REGISTER} element={<RegisterPage />}></Route>
      <Route path={ROUTES.PROFILE} element={<ProfilePage />}></Route>
      <Route path={ROUTES.CHECKOUT} element={<Checkout />}></Route>
      <Route path={ROUTES.ADDITEM} element={<AddItem />}></Route>
      <Route path={ROUTES.ORDERS} element={<Orders />}></Route>
    </Routes>
  );
};

export default Router;
