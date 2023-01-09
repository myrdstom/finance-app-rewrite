import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Logo } from "components/logo";
import {
  EMAIL_REQUIRED,
  INVALID_EMAIL_ADDRESS,
  PASSWORD_REQUIRED,
} from "constants/views/auth";
import SnackBar from "elements/SnackBar";
import { loginUser } from "../actions/auth.actions";
import LoginForm from "./LoginForm";
import { Stack } from "../Auth.styles";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);
  const authState = useSelector((state) => state?.authentication);
  useEffect(() => {
    if (authState?.error && Object.keys(authState?.error).length > 0) {
      setError(Object.values(authState.error)[0]);
      setOpen(true);
    } else if (authState?.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [authState]);

  const defaultValues = { email: "", password: "" };

  const yupObject = Yup.object({
    email: Yup.string().email(INVALID_EMAIL_ADDRESS).required(EMAIL_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
  });

  const handleSubmit = (values) => {
    const { email, password } = values;
    const jsonData = {
      email,
      password,
    };
    dispatch(loginUser(jsonData));
  };

  return (
    <Container component="main" maxWidth="xs">
      {error.length && (
        <SnackBar message={error} open={open} setOpen={setOpen} />
      )}
      <Stack mt={20}>
        <Grid container justify="flex-start">
          <Typography variant="h3">
            <Logo size="big" />
          </Typography>
        </Grid>
        <Grid container justify="flex-start">
          <Typography variant="h2" mt={1}>
            Welcome back
          </Typography>
        </Grid>
        <Typography variant="h6" mt={5} mb={4}>
          Please enter your email address and password to access your dashboard.
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <LoginForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
}

export default Login;
