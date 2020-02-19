import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDoList from "../components/ToDoList";

const init = [{ id: 1, name: "Learn React.js", state: false }];

afterEach(cleanup);
it("render the h3 title ", () => {
  const { getByTestId, getByText, asFragment } = render(
    <ToDoList list={init}></ToDoList>
  );
  expect(asFragment()).toMatchSnapshot();

  const title = getByTestId("listTitle");
  expect(title).toHaveTextContent("The To Do List");

  const byText = getByText("The To Do List");
  expect(byText).toBeInTheDocument();
  expect(byText).toHaveClass("text-center");
});

it("tests the init list", () => {
  const { getByTestId } = render(<ToDoList list={init}></ToDoList>);

  expect(getByTestId("todo")).toHaveTextContent("Learn React.js");
});

// it("test the list props", async () => {
//   const { getByText } = render(<ToDoList list={init}> </ToDoList>);
//   const byText = await waitForElement(() => getByText("Learn React.js"));
//   //  expect(byText.value).toHaveTextContent("Learn React.js");
//   expect(byText.value).toBeInTheDOM();
// });
