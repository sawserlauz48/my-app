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
            const payload = jwt_decode(token);
            const userId = payload._id
            await axios.get(`/users/${userId}`);
            dispatch(authActions.login(payload));
            dispatch(adminAuthActions.admin(payload));
        } catch (err) {
            toast.error("invalid token")
        }
    };
};

export default useLoggedIn;