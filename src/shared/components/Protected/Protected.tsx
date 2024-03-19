import { FC, PropsWithChildren, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

// Firebase config
import { auth } from "core/firebase/firebase-config";

export const Protected: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onAuth = onAuthStateChanged(auth, (user: any) => {
      if (!user) {
        navigate("/sign-up");
      }
    });

    return onAuth;
  });

  return <Box>{children}</Box>;
};
