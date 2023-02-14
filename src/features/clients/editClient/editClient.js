import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ClientModal } from "components/clientsModal";
import {
  editClient,
  getClient,
  getClients,
} from "../actions/clients/actions/client.actions";

const EditClient = ({ setOpen, title, clientId }) => {
  const dispatch = useDispatch();
  const {
    clientName,
    address,
    city,
    country,
    clientContactEmail,
    clientContactNumber,
  } = useSelector((state) => state?.clients?.client);
  useEffect(() => {
    dispatch(getClient(clientId));
  }, []);

  const defaultValues = {
    clientName: clientName || "",
    address: address || "",
    city: city || "",
    country: country || "",
    clientContactEmail: clientContactEmail || "",
    clientContactNumber: clientContactNumber || "",
  };

  const yupObject = Yup.object({
    clientName: Yup.string(),
    address: Yup.string(),
    city: Yup.string(),
    country: Yup.string(),
    clientContactEmail: Yup.string(),
    clientContactNumber: Yup.string(),
  });

  const handleSubmit = async (values) => {
    dispatch(editClient(values, clientId));
    dispatch(getClients());
    setOpen(false);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={defaultValues}
      validationSchema={yupObject}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <ClientModal setOpen={setOpen} title={title} formik={formik} />
      )}
    </Formik>
  );
};

export default EditClient;
