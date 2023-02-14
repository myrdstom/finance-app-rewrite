import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { CustomButton } from "elements/customButton";
import { COLORS } from "styles/theme";
import { Add } from "./addButton.styles";

const AddButton = ({ pathname, section }) => {
  const theme = useTheme();
  return (
    <Box py={5}>
      <Link underline="none" href={pathname}>
        <CustomButton
          startIcon={<Add />}
          fontcolor={COLORS.METAL_GREY}
          padding={theme.spacing(0, 2, 0, 0)}
          width="10rem"
          height="2rem"
          boxshadow="true"
        >
          <Typography variant="w8">{section}</Typography>
        </CustomButton>
      </Link>
    </Box>
  );
};

export default AddButton;
