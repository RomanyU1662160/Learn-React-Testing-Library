import React, { useState } from "react";

const ToDoItem = props => {
  const { name, state, id } = props.item;
  const { deleteTodo } = props;
  console.log(deleteTodo);

  return (
    <>
      <div className="row border-bottom p-4">
        <div className="col-md-4"> Name : {name} </div>

        <div className="col-md-4">
          Status: {!state ? " not Yet " : "completed"}
        </div>

        <div className="col-md-2">
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
