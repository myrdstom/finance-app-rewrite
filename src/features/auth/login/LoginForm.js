import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { TextField } from "elements/TextField";
import { COLORS } from "../../../styles/theme";

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
          <Button type="submit" fullWidth variant="contained" color="primary">
            LogIn
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link to="/" style={{ textDecoration: "none" }}>
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
