import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.js";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App></App>);
  expect(asFragment()).toMatchSnapshot();
});

it("set the toDos list ", () => {
  const { getByTestId } = render(<App></App>);
  const toDos = getByTestId("list");
  //expect(toDos.children.length).toBe(4);
  expect(toDos).toHaveTextContent("To do App");
});
