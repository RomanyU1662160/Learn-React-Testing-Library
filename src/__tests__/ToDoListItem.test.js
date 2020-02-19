import React from "react";
import { render } from "@testing-library/react";
import ToDoItem from "../components/ToDoItem";

const item = {
  id: 1,
  name: "any",
  state: "false"
};
it("test the initial list", () => {
  const { queryAllByTestId } = render(<ToDoItem item={item}> </ToDoItem>);
  const toDos = queryAllByTestId("todo");
  expect(toDos.length).toBe(1);
});
