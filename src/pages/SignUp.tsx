import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {  createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import {
  TextField,
  Stack,
  Typography,
  Button,
  Alert,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Validation
import { RegisterSchema } from "core/validation/auth";

// Firebase config
import { auth, db } from "core/firebase/firebase-config";

// Hooks
import { useFirebaseError } from "core/firebase/hooks/useFirebaseError";
import { useThunkDispatch } from "shared/hooks/useThunkDispatch";

// Components
import { Form } from "shared/components/Form/Form";
import { login } from "store/user-entity/reducer";
import { Container } from "shared/components/Container/Container";

export const SignUp: FC = () => {
  const dispatch = useThunkDispatch();
  const navigate = useNavigate();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] =
    useState<boolean>(false);
  const [firebaseError, setFirebaseError] = useFirebaseError("");

  const userCollectionRef = collection(db, "users");

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const userId = userCredential.user.uid;

          const addUserInfo = async () => {
            await addDoc(userCollectionRef, {
              UID: userId,
              username: values.username,
              email: values.email,
              name: values.name || "",
            });
            signOut(auth);
          };
          addUserInfo();
          dispatch(
            login({
              username: values.username,
              email: values.email,
              name: values.name,
            })
          );
          navigate("/");
        })
        .catch((err) => setFirebaseError(err));
    },
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Register
          </Typography>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
          />
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            fullWidth
          />
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name ? formik.errors.name : "Optional"}
            fullWidth
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            placeholder="Password"
            type={passwordIsVisible ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setPasswordIsVisible((pass) => !pass)}
                >
                  {passwordIsVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              ),
            }}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            type={confirmPasswordIsVisible ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={() => setConfirmPasswordIsVisible((pass) => !pass)}
                >
                  {confirmPasswordIsVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              ),
            }}
          />
          {firebaseError && <Alert severity="error">{firebaseError}</Alert>}
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};
