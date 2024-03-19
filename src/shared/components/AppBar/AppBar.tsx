import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";

// Hooks
import { useThunkDispatch } from "shared/hooks/useThunkDispatch";

// Firebase config
import { auth } from "core/firebase/firebase-config";

// Redux
import { logout } from "store/user-entity/reducer";
import { useSelector } from "react-redux";
import { selectorGetUser } from "store/user-entity/selectors";

export const AppBar = () => {
  const navigate = useNavigate();
  const dispatch = useThunkDispatch();
  const user = useSelector(selectorGetUser);
  const logoutUser = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <MuiAppBar position="static">
      <Toolbar
        sx={{
          margin: "0 0 0 auto ",
        }}
      >
        <Typography sx={{ color: "#fff" }}>{user?.email}</Typography>
        <Button sx={{ color: "#fff" }} onClick={logoutUser}>
          Logout
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};
