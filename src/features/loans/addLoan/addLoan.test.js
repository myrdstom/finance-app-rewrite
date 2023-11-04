import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import { loans } from "__tests__/__fixtures__/loans";
import AddLoan from "./addLoan";

describe("Add Client Component", () => {
  test("it should add a loan", async () => {
    const userSetup = userEvent.setup();
    const { client, dateDisbursed, amount, currency, comment } = loans;
    RenderWithRouterMatch(<AddLoan />);

    expect(screen.getByRole("button", { name: /Save/i })).toBeEnabled();
    const saveButton = screen.getByTestId("save");
    await userSetup.type(screen.getByTestId("client"), client);
    await userSetup.type(screen.getByTestId("selectedDate"), dateDisbursed);
    await userSetup.type(screen.getByTestId("amount"), amount);
    await userSetup.type(screen.getByTestId("rate"), "5");
    await userSetup.type(screen.getByTestId("currency"), currency);
    await userSetup.type(screen.getByTestId("comment"), comment);
    await userSetup.click(saveButton);
  });
});
