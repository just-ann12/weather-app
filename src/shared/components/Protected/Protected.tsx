import { FC, PropsWithChildren, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

// Firebase config
import { auth } from "core/firebase/firebase-config";
import { getUserInfo } from "store/user-entity/reducer";
import { useThunkDispatch } from "shared/hooks/useThunkDispatch";

export const Protected: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useThunkDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onAuth = onAuthStateChanged(auth, (user: any) => {
      if (!user) {
        navigate("/sign-up");
      } else {
        dispatch(getUserInfo({ email: user.email, username: user.username }));
      }
    });

    return onAuth;
  });

  return <Box>{children}</Box>;
};
