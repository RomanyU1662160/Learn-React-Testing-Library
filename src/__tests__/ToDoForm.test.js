import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ToDoForm from "../components/ToDoForm";

it("check input value", () => {
  const { getByTestId } = render(<ToDoForm></ToDoForm>);

  const searchInput = getByTestId("searchInput");

  searchInput.value = "new something";

  fireEvent.change(searchInput);

  expect(searchInput.value).toBe("new something");
});
