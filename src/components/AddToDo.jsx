import React, { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
function AddToDo({ onNewItem }) {
  const [newItem, setNewItem] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleItemChange = (e) => setNewItem(e.target.value);
  const handleDateChange = (e) => setDueDate(e.target.value);
  const newItemRef = useRef();
  const dueDateRef = useRef();
  return (
    <div className="todo-container text-center">
      <h1></h1>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              ref={newItemRef}
              placeholder="Enter ToDo"
              onChange={handleItemChange}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateRef} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button
              type="button"
              ref={dueDateRef}
              className="btn btn-outline-success"
              onClick={() => onNewItem(newItem, dueDate)}
            >
              <IoIosAddCircleOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
