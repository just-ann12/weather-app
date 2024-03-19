import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
