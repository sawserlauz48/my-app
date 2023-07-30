import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { adminAuthActions } from "../store/adminAuth";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
const useLoggedIn = () => {
    const dispatch = useDispatch();
    return async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return;
            }
            await axios.get("/users/userInfo");
            const payload = jwt_decode(token);
            dispatch(authActions.login(payload));
            dispatch(adminAuthActions.admin(payload));
        } catch (err) {

            toast.error("invalid token")

        }
    };
};

export default useLoggedIn;