import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import Registration from "features/auth/registration";
import { user } from "__tests__/__fixtures__/user";

describe("Registration Component", () => {
  test("it should register a user", async () => {
    const userSetup = userEvent.setup();
    const { email, password, confirmPassword, firstName, lastName } = user;
    RenderWithRouterMatch(<Registration />);

    expect(screen.getByText("Register a new account.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Sign Up/i })).toBeEnabled();
    await userSetup.type(screen.getByLabelText(/First Name/i), firstName);
    await userSetup.type(screen.getByLabelText(/Last Name/i), lastName);
    await userSetup.type(screen.getByLabelText(/Email Address/i), email);
    await userSetup.type(screen.getByLabelText(/Pasword/i), password);
    await userSetup.type(
      screen.getByLabelText(/Confirm Password/i),
      confirmPassword
    );
    await userSetup.click(screen.getByRole("button", { name: /Sign Up/i }));
  });
});
