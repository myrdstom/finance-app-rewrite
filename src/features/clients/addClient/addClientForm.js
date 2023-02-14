import React from "react";
import { Form } from "formik";
import { Box, Container, Grid } from "@mui/material";
import { TextField } from "elements/textField";
import { CustomButton } from "elements/customButton";
import { COLORS } from "styles/theme";

const AddClientForm = ({ formik, onClick }) => (
  <Box mt={10} px={5}>
    <Container>
      <Form id="loginForm" onSubmit={formik.handleSubmit}>
        {" "}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Client"
              name="clientName"
              value={formik.values.clientName}
              onChange={formik.handleChange}
              error={
                formik.touched.clientName && Boolean(formik.errors.clientName)
              }
              helperText={formik.touched.clientName && formik.errors.clientName}
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              name="clientContactEmail"
              value={formik.values.clientContactEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.clientContactEmail &&
                Boolean(formik.errors.clientContactEmail)
              }
              helperText={
                formik.touched.clientContactEmail &&
                formik.errors.clientContactEmail
              }
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tel No."
              name="clientContactNumber"
              value={formik.values.clientContactNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.clientContactNumber &&
                Boolean(formik.errors.clientContactNumber)
              }
              helperText={
                formik.touched.clientContactNumber &&
                formik.errors.clientContactNumber
              }
              id="email"
            />
          </Grid>
          <Grid item xs={6}>
            <CustomButton
              type="submit"
              width="100%"
              variant="contained"
              background={COLORS.LIGHT_BLUE}
              hoverbackground={COLORS.LIGHT_BLUE}
            >
              Save
            </CustomButton>
          </Grid>
          <Grid item xs={6}>
            <CustomButton
              type="submit"
              width="100%"
              variant="contained"
              background={COLORS.MEDIUM_GREY}
              hoverbackground={COLORS.MEDIUM_GREY}
              onClick={onClick}
            >
              Close
            </CustomButton>
          </Grid>
        </Grid>
      </Form>
    </Container>
  </Box>
);

export default AddClientForm;
