import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import uuid from "uuid";

function App() {
  const init = [
    { id: 1, name: "Learn React.js", state: false },
    { id: 2, name: "Learn vue.js", state: false },
    { id: 3, name: "Learn Angular.js", state: false },
    { id: 4, name: "Learn Laravel", state: false }
  ];

  const [toDos, setToDos] = useState(init);

  const addToDo = val => {
    const newTodo = {
      id: uuid(),
      name: val,
      state: false
    };
    let newList = [...toDos, newTodo];
    setToDos(newList);
  };

  const DeleteTodo = id => {
    console.log("Delete clicked");
    const filteredToDos = toDos.filter(item => {
      return item.id !== id;
    });

    return setToDos(filteredToDos);
  };

  return (
    <div className="App">
      <h1 data-testid="list"> To do App </h1>
      <ToDoForm addToDo={addToDo}> </ToDoForm>
      <ToDoList list={toDos} deleteTodo={DeleteTodo}></ToDoList>
    </div>
  );
}

export default App;
