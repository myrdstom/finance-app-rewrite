import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "layouts/drawer";
import { getLoans } from "features/loans/actions/loans/actions/loan.actions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyRates } from "api/currencyConverter";
import {
  calculatePopularCurrency,
  calculateRevenuePerMonth,
  getMostValuedCustomers,
} from "./utils";
import DashBoardContent from "./dashBoardContent";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [valuedCustomers, setValuedCustomers] = useState([]);
  const [euroRate, setEuroRate] = useState(1.06999);
  const [dollarRate, setDollarRate] = useState(3700);
  const [currencyDemand, setCurrencyDemand] = useState([]);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const loans = useSelector((state) => state?.loans.loans);
  const loader = useSelector((state) => state?.loans.loading);

  useEffect(() => {
    (async () => {
      if (loans.length) {
        const euro = await getCurrencyRates("EUR", "USD");
        const dollar = await getCurrencyRates("USD", "UGX");
        setValuedCustomers(
          getMostValuedCustomers(
            loans,
            euroRate === undefined,
            dollarRate === undefined
          )
        );
        setCurrencyDemand(
          calculatePopularCurrency(
            loans,
            euroRate === undefined,
            dollarRate === undefined
          )
        );
        setMonthlyRevenue(
          calculateRevenuePerMonth(
            loans,
            euroRate === undefined,
            dollarRate === undefined
          )
        );
        setEuroRate(euro);
        setDollarRate(dollar);
      }
    })();
  }, [loans]);

  useEffect(() => {
    (async () => {
      await dispatch(getLoans());
    })();
  }, []);
  return (
    <ResponsiveDrawer>
      {!loader ? (
        <DashBoardContent
          clients={valuedCustomers}
          currency={currencyDemand}
          monthlyRevenue={monthlyRevenue}
        />
      ) : (
        <>Loading</>
      )}
    </ResponsiveDrawer>
  );
};

export default Dashboard;
