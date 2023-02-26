import React from "react";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import { screen, waitFor } from "@testing-library/react";
import MatchMediaMock from "jest-matchmedia-mock";
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
    RenderWithRouterMatch(<GetClients />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Allied Power")).toBeInTheDocument();
    });
  });
});
