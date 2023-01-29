import React from "react";
import { Form } from "formik";
import { Grid, Link, Typography } from "@mui/material";
import { TextField } from "elements/TextField";
import { CustomButton } from "elements/CustomButton";
import { COLORS } from "styles/theme";

function LoginForm({ formik }) {
  return (
    <Form id="loginForm" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
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
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type="password"
            id="password"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            background={COLORS.SKY_BLUE}
            hoverBackground={COLORS.BLUE}
          >
            LogIn
          </CustomButton>
        </Grid>
        <Grid item xs={12}>
          <Link underline="none" href="/register">
            <Typography variant="h6" sx={{ color: COLORS.SKY_BLUE }}>
              Do not have an account? Sign Up
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
}

export default LoginForm;
