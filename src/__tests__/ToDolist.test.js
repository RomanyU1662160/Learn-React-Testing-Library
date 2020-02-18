import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoList from "../components/ToDoList";

const init = [
  { id: 1, name: "Learn React.js", state: false },
  { id: 2, name: "Learn Vue.js", state: false }
];

const DeleteTodo = id => {
  console.log("Delete clicked");
};

it("render the h3 title ", () => {
  const { getByTestId, getByText, asFragment } = render(
    <ToDoList list={init}></ToDoList>
  );
  expect(asFragment()).toMatchSnapshot();
  const title = getByTestId("listTitle");
  expect(title).toHaveTextContent("The To Do List");
});
