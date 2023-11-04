import React from "react";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import { screen, waitFor } from "@testing-library/react";
import MatchMediaMock from "jest-matchmedia-mock";
import GetLoans from "./getLoans";

let matchMedia;

describe("Get Clients Component", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("it should render the get loans page", async () => {
    RenderWithRouterMatch(<GetLoans />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Loans Registered")).toBeInTheDocument();
    });
  });
});
