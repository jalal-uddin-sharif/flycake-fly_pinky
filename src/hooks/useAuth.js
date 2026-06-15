import { logOutUser, setUser } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/v1/auth/me");
        const data = await res.json();
        if (data.user) {
          dispatch(setUser(data.user));
        } else {
          dispatch(logOutUser());
        }
      } catch (error) {
        dispatch(logOutUser());
      }
    }

    if (!user) {
      fetchUser();
    }
  }, [dispatch, user]);
  return user;
};
