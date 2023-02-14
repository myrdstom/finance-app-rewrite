import React from "react";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import { screen } from "@testing-library/react";
import MatchMediaMock from "jest-matchmedia-mock";
import userEvent from "@testing-library/user-event";
import GetClients from "./getClients";

let matchMedia;

describe("Get Clients Component", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("it should render the get clients page", async () => {
    const userSetup = userEvent.setup();
    RenderWithRouterMatch(<GetClients />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    await userSetup.click(screen.getByRole("button", { name: /Add Client/i }));
  });
});
