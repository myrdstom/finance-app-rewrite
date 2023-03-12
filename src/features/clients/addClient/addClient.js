import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { addClientYupObject } from "../clients.schema";
import {
  addClient,
  getClients,
} from "../actions/clients/actions/client.actions";
import { ClientModal } from "../../../components/clientsModal";

const AddClient = ({ setOpen, title }) => {
  const dispatch = useDispatch();

  const defaultValues = {
    clientName: "",
    address: "",
    city: "",
    country: "",
    clientContactEmail: "",
    clientContactNumber: "",
  };

  const handleSubmit = async (values) => {
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
    dispatch(getClients());
    setOpen(false);
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={addClientYupObject}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <ClientModal setOpen={setOpen} title={title} formik={formik} />
      )}
    </Formik>
  );
};

export default AddClient;
