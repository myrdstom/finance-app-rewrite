import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Logo } from "components/logo";
import {
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_REQUIRED,
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL_ADDRESS,
  LAST_NAME_REQUIRED,
  PASSWORD_REQUIRED,
} from "constants/views/auth";
import SnackBar from "elements/snackBar";
import { registerUser } from "../actions/auth.actions";
import { Stack } from "../auth.styles";
import RegistrationForm from "./registrationForm";

export const Registration = () => {
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

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const yupObject = Yup.object({
    firstName: Yup.string().required(FIRST_NAME_REQUIRED),
    lastName: Yup.string().required(LAST_NAME_REQUIRED),
    email: Yup.string().email(INVALID_EMAIL_ADDRESS).required(EMAIL_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
    confirmPassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED),
  });

  const handleSubmit = (values) => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    const jsonData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    dispatch(registerUser(jsonData));
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
            Sign Up
          </Typography>
        </Grid>
        <Typography variant="h6" mt={5} mb={4}>
          Register a new account.
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegistrationForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Registration;
