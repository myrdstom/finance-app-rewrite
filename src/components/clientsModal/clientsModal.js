import React from "react";
import { Form } from "formik";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { CustomButton } from "elements/customButton";
import { Modal } from "elements/modal";
import {
  IconButton,
  CloseIcon,
  TextField,
  ModalBody,
} from "./clientsModal.styles";
import { ModalHeader } from "../modalHeader";
import { COLORS } from "../../styles/theme";

const ClientsModal = ({ setOpen, title, formik }) => {
  const { handleSubmit, values, touched, errors, handleChange } = formik;
  return (
    <Modal
      open
      aria-labelledby="New Study Modal"
      width="29.25rem"
      height="auto"
      onClose={() => setOpen(false)}
    >
      {" "}
      <Form id="clients" onSubmit={handleSubmit}>
        <Grid container p={4} pb={2}>
          <Grid item xs={12}>
            <ModalHeader title={title} mb={3}>
              <IconButton
                data-testid="close"
                onClick={() => setOpen(false)}
                pt={5}
              >
                <CloseIcon />
              </IconButton>
            </ModalHeader>
            <Divider />
            <ModalBody>
              <Box mt={2}>
                <Typography variant="w7">Client Name</Typography>
                <TextField
                  size="small"
                  dataTestId="client-name"
                  name="clientName"
                  value={values.clientName}
                  onChange={handleChange}
                  error={touched.clientName && Boolean(errors.clientName)}
                  helperText={touched.clientName && errors.clientName}
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ mt: 1.3 }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Email Address</Typography>
                <TextField
                  size="small"
                  dataTestId="email"
                  name="clientContactEmail"
                  value={values.clientContactEmail}
                  onChange={handleChange}
                  error={
                    touched.clientContactEmail &&
                    Boolean(errors.clientContactEmail)
                  }
                  helperText={
                    touched.clientContactEmail && errors.clientContactEmail
                  }
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ mt: 1.3 }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Tel No.</Typography>
                <TextField
                  size="small"
                  dataTestId="tel-no"
                  name="clientContactNumber"
                  value={values.clientContactNumber}
                  onChange={handleChange}
                  error={
                    touched.clientContactNumber &&
                    Boolean(errors.clientContactNumber)
                  }
                  helperText={
                    touched.clientContactNumber && errors.clientContactNumber
                  }
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ mt: 1.3 }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Address</Typography>
                <TextField
                  size="small"
                  dataTestId="address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  sx={{ mt: 1.3 }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">City</Typography>
                <TextField
                  size="small"
                  dataTestId="city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Box>
              <Box mt={2}>
                <Typography variant="w7">Country</Typography>
                <TextField
                  size="small"
                  dataTestId="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  error={touched.country && Boolean(errors.country)}
                  helperText={touched.country && errors.country}
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Box>
              <Box mt={2}>
                <CustomButton
                  type="submit"
                  width="100%"
                  variant="contained"
                  background={COLORS.LIGHT_BLUE}
                  hoverbackground={COLORS.LIGHT_BLUE}
                  dataTestId="save"
                >
                  Save
                </CustomButton>
              </Box>
            </ModalBody>
          </Grid>
        </Grid>
      </Form>
    </Modal>
  );
};

export default ClientsModal;
