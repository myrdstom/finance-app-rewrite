import React from "react";
import { Container } from "@mui/material";
import { AddButton } from "../addButton";

export const DataGridContainer = ({ children, section }) => (
  <Container width="100%">
    <AddButton pathname="/clients/add-client/" section={section} />
    {children}
  </Container>
);

export default DataGridContainer;
