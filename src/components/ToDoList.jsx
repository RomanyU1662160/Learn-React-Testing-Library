import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
  const { list, deleteTodo } = props;

  console.log("list in todolist ", list);
  return (
    <div>
      <h3> to do list List</h3>
      {list.map(item => (
        <ToDoItem key={item.id} item={item} deleteTodo={deleteTodo}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoList;
