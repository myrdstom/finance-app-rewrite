import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { screen } from "@testing-library/react";
import { RenderWithRouterMatch } from "__tests__/setupTests";
import Dashboard from "features/dashboard";

let matchMedia;

describe("Dahsboard Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Dashboard page should render", () => {
    RenderWithRouterMatch(<Dashboard />);
    expect(screen.getByText("Dashboard")).toBeTruthy();
  });
});
