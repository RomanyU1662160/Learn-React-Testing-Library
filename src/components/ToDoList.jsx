import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = props => {
  const { list, deleteTodo } = props;

  return (
    <div>
      <h3 data-testid="listTitle" className="text-info text-center">
        The To Do List
      </h3>
      {list.map(item => (
        <ToDoItem key={item.id} item={item} deleteTodo={deleteTodo}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoList;
