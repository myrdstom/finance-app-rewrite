import React from "react";
import MatchMediaMock from "jest-matchmedia-mock";
import { render, screen } from "@testing-library/react";
import DashboardView from "../../../../features/dashboard/dashboardView";
import { RenderWithRouterMatch } from "../../__tests__/test-utils";

let matchMedia;

describe("Dahsboard Tests", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });
  test("Dashboard page should render", () => {
    render(
      <RenderWithRouterMatch>
        <DashboardView />
      </RenderWithRouterMatch>
    );
    screen.debug();
    expect(screen.getByText("Dashboard")).toBeTruthy();
  });
});
