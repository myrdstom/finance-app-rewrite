import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import ResponsiveDrawer from "layouts/drawer";
import AddClientForm from "./addClientForm";
import { addClientYupObject } from "./addClient.Schema";
import { addClient } from "../actions/clients/actions/client.actions";

const AddClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clientError = useSelector((state) => state?.clients.error);
  useEffect(() => {
    if (clientError?.message) {
      console.warn(clientError.message);
    }
  }, [clientError]);
  const defaultValues = {
    clientName: "",
    address: "",
    city: "",
    country: "",
    clientContactEmail: "",
    clientContactNumber: "",
  };

  const handleSubmit = async (values, onSubmitProps) => {
    const {
      clientName,
      address,
      city,
      country,
      clientContactEmail,
      clientContactNumber,
    } = values;

    const jsonData = {
      clientName,
      address,
      city,
      country,
      clientContactEmail,
      clientContactNumber,
    };
    await dispatch(addClient(jsonData));
    onSubmitProps.resetForm();
  };

  const closePage = () => {
    navigate("/clients");
  };
  return (
    <ResponsiveDrawer>
      <Formik
        initialValues={defaultValues}
        validationSchema={addClientYupObject}
        onSubmit={handleSubmit}
      >
        {(formik) => <AddClientForm formik={formik} onClick={closePage} />}
      </Formik>
    </ResponsiveDrawer>
  );
};

export default AddClient;
