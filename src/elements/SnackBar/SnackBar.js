import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackBar = ({
  open,
  setOpen,
  horizontal = "center",
  severity = "error",
  vertical = "top",
  message = "This is an error message!",
}) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
