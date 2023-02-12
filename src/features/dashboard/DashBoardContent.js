import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { COLORS } from "styles/theme";
import areaChart from "components/charts/areaChart";
import barchart from "components/charts/barchart";
import donut from "components/charts/donut";
import { StyledBox } from "./Dashboard.styles";

const DashBoardContent = ({ clients, currency, monthlyRevenue }) => {
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    refactoredClientData(clients);
  }, [clients]);

  const refactoredClientData = (data) => {
    const clientDetails = [];
    Object.keys(data).forEach((key) => {
      clientDetails.push({
        name: key,
        y: clients[key],
      });
    });
    setClientData(clientDetails);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        width="100%"
        sx={{ backgroundColor: COLORS.LIGHT }}
      >
        <Grid item xs={12}>
          <StyledBox border={1}>
            <HighchartsReact
              highcharts={Highcharts}
              options={areaChart(monthlyRevenue)}
            />
          </StyledBox>
        </Grid>
        <Grid item xs={6}>
          <StyledBox border={1}>
            <HighchartsReact
              highcharts={Highcharts}
              options={barchart(clientData)}
            />
          </StyledBox>
        </Grid>
        <Grid item xs={6}>
          <StyledBox border={1}>
            <HighchartsReact
              highcharts={Highcharts}
              options={donut(currency)}
            />
          </StyledBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashBoardContent;
