import React from "react";
import { Form } from "formik";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { CustomButton } from "elements/customButton";
import { Modal } from "elements/modal";
import { COLORS } from "styles/theme";
import {
  IconButton,
  CloseIcon,
  TextField,
  ModalBody,
} from "./loansModal.styles";
import { ModalHeader } from "../modalHeader";

const LoansModal = ({ setOpen, title, formik }) => {
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
      <Form id="loans" onSubmit={handleSubmit}>
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="w7">Client</Typography>
                  <TextField
                    size="small"
                    dataTestId="client"
                    name="client"
                    value={values.clientName}
                    onChange={handleChange}
                    error={touched.client && Boolean(errors.client)}
                    helperText={touched.client && errors.client}
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{ mt: 1.3 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="w7">Date Disbursed</Typography>
                  <TextField
                    size="small"
                    dataTestId="selectedDate"
                    name="selectedDate"
                    value={values.selectedDate}
                    onChange={handleChange}
                    error={touched.selectedDate && Boolean(errors.selectedDate)}
                    helperText={touched.selectedDate && errors.selectedDate}
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{ mt: 1.3 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="w7">Amount</Typography>
                  <TextField
                    size="small"
                    dataTestId="amount"
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                    error={touched.amount && Boolean(errors.amount)}
                    helperText={touched.amount && errors.amount}
                    variant="filled"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    sx={{ mt: 1.3 }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Typography variant="w7">Rate.</Typography>
                    <TextField
                      size="small"
                      dataTestId="rate"
                      name="rate"
                      value={values.rate}
                      onChange={handleChange}
                      error={touched.rate && Boolean(errors.rate)}
                      helperText={touched.rate && errors.rate}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{ mt: 1.3 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box>
                    <Typography variant="w7">Currency</Typography>
                    <TextField
                      size="small"
                      dataTestId="currency"
                      name="currency"
                      value={values.currency}
                      onChange={handleChange}
                      error={touched.currency && Boolean(errors.currency)}
                      helperText={touched.currency && errors.currency}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{ mt: 1.3 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="w7">Comment</Typography>
                    <TextField
                      size="small"
                      dataTestId="comment"
                      name="comment"
                      value={values.comment}
                      onChange={handleChange}
                      error={touched.comment && Boolean(errors.comment)}
                      helperText={touched.comment && errors.comment}
                      variant="filled"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
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
                </Grid>
              </Grid>
            </ModalBody>
          </Grid>
        </Grid>
      </Form>
    </Modal>
  );
};

export default LoansModal;
