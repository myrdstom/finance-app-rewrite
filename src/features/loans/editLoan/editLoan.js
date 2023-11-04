import React from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { LoanModal } from "components/loansModal";
import { loanYupObject } from "../loans.schema";
import { getLoans, addLoan } from "../actions/loans/actions/loan.actions";

const defaultValues = {
  client: "",
  amount: 0,
  rate: 0,
  currency: "",
  comment: "",
  selectedDate: "",
};

const EditLoan = ({ setOpen, title }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { client, amount, rate, currency, comment, selectedDate } = values;

    const jsonData = {
      client,
      amount,
      rate,
      currency,
      comment,
      dateDisbursed: dayjs(selectedDate).format("YYYY-MM-DD"),
    };
    await dispatch(addLoan(jsonData));
    dispatch(getLoans());
    setOpen(false);
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={loanYupObject}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <LoanModal setOpen={setOpen} title={title} formik={formik} />
      )}
    </Formik>
  );
};

export default EditLoan;
