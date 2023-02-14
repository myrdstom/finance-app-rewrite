import React from "react";
import { Form } from "formik";
import { Grid, Link, Typography } from "@mui/material";
import { COLORS } from "styles/theme";
import { TextField } from "elements/textField";
import { CustomButton } from "elements/customButton";

const RegistrationForm = ({ formik }) => (
  <Form id="registrationForm" onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="First Name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          id="firstName"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Last Name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          id="lastName"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email Address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          id="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Pasword"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          id="password"
          type="password"
          dataTestId="password"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          id="confirmPassword"
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          type="submit"
          width="100%"
          variant="contained"
          background={COLORS.SKY_BLUE}
          hoverbackground={COLORS.BLUE}
        >
          Sign Up
        </CustomButton>
      </Grid>
      <Grid item xs={12}>
        <Link underline="none" href="/">
          <Typography variant="h6" sx={{ color: COLORS.SKY_BLUE }}>
            Already have an account? Sign in
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Form>
);

export default RegistrationForm;
