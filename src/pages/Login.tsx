import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import {  signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";
import { TextField, Stack, Typography, Button, Alert } from "@mui/material";

// Validation
import { LoginSchema } from "core/validation/auth";

// Firebase config
import { auth, db } from "core/firebase/firebase-config";

// Hooks
import { useFirebaseError } from "core/firebase/hooks/useFirebaseError";

// Redux
import { login } from "store/user-entity/reducer";

// Components
import { Form } from "shared/components/Form/Form";
import { Container } from "shared/components/Container/Container";

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firebaseError, setFirebaseError] = useFirebaseError("");

  // Setup form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential: UserCredential) => {
          const user = userCredential.user;
          const uid = user.uid;
  
          const getUserDoc = async () => {
            const data = {
              username: "",
            };
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("UID", "==", uid));
            const querySnapshot = await getDocs(q);
            
            // This will only run once
            querySnapshot.forEach((doc) => {
              data.username = doc.data().username;
            });
  
            // Dispatch all data into the store
            dispatch(
              login({
                email: user.email || "",
                username: data.username,
              })
            );
            navigate("/");
          };
  
          getUserDoc();
        })
        .catch((err) => setFirebaseError(err));
    },
  });
  
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h5" sx={{textAlign:'center'}}>
            Login
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
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
          />
          {firebaseError && <Alert severity="error">{firebaseError}</Alert>}
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button>
            <Link to="/sign-up">Sign-up</Link>
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};
