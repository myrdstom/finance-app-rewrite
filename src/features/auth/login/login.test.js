import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import Login from "features/auth/login";
import { user } from "__tests__/__fixtures__/user";

describe("Login Component", () => {
  test("it should login a user", async () => {
    const userSetup = userEvent.setup();
    const { email, password } = user;
    RenderWithRouterMatch(<Login />);

    expect(screen.getByText("Welcome back")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /LogIn/i })).toBeEnabled();
    await userSetup.type(screen.getByLabelText(/Email Address/i), email);
    await userSetup.type(screen.getByLabelText(/Password/i), password);
    await userSetup.click(screen.getByRole("button", { name: /LogIn/i }));
    await waitFor(() => screen.getByText(/Dashboard/i));
  });
});
