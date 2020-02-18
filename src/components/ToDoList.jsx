import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
  const { list, deleteTodo } = props;

  console.log("list in todolist ", list);
  return (
    <div>
      <h3 data-testid="listTitle"> The To Do List</h3>
      {list.map(item => (
        <ToDoItem key={item.id} item={item} deleteTodo={deleteTodo}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoList;
