import React, { useState } from "react";

export default function ToDoForm(props) {
  const { addToDo } = props;
  const [value, setValue] = useState("");

  const handleAddToDo = e => {
    e.preventDefault();
    addToDo(value);
    setValue("");
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={e => handleAddToDo(e)}
        className="mt-4 col-md-6 offset-md-3"
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add to do"
            onChange={e => handleInputChange(e)}
            value={value}
          />
        </div>
        <div className="form-group">
          <button className="btn-dark">Add to do</button>
        </div>
      </form>
    </div>
  );
}
