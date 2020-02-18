import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App></App>);
  expect(asFragment()).toMatchSnapshot();
});
