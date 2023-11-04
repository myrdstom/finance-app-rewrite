import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import { client } from "__tests__/__fixtures__/client";
import AddLoan from "./addLoan";

describe("Add Client Component", () => {
  test("it should add a loan", async () => {
    const userSetup = userEvent.setup();
    const { email, address, name, city, number, country } = client;
    RenderWithRouterMatch(<AddLoan />);

    expect(screen.getByRole("button", { name: /Save/i })).toBeEnabled();
    const saveButton = screen.getByTestId("save");
    // await userSetup.type(screen.getByTestId("client"), name);
    // await userSetup.type(screen.getByTestId("email"), email);
    // await userSetup.type(screen.getByTestId("tel-no"), number);
    // await userSetup.type(screen.getByTestId("address"), address);
    // await userSetup.type(screen.getByTestId("city"), city);
    // await userSetup.type(screen.getByTestId("country"), country);
    await userSetup.click(saveButton);
  });
});
