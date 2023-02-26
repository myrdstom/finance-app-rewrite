import React from "react";
import { render } from "@testing-library/react";
import { Formik, Form } from "formik";
import ClientsModal from "./clientsModal";

describe("ClientsModal", () => {
  test("renders properly", async () => {
    const initialValues = {
      clientName: "",
      clientContactEmail: "",
      clientContactNumber: "",
      address: "",
      city: "",
      country: "",
    };

    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => (
          <Form>
            <ClientsModal
              setOpen={() => {}}
              title="New Client"
              formik={formik}
            />
          </Form>
        )}
      </Formik>
    );

    expect(getByTestId("client-name")).toBeInTheDocument();
    expect(getByTestId("email")).toBeInTheDocument();
    expect(getByTestId("tel-no")).toBeInTheDocument();
    expect(getByTestId("address")).toBeInTheDocument();
    expect(getByTestId("city")).toBeInTheDocument();
    expect(getByTestId("country")).toBeInTheDocument();
    expect(getByTestId("close")).toBeInTheDocument();
    expect(getByTestId("save")).toBeInTheDocument();
  });
});
