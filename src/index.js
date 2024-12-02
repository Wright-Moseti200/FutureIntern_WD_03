import React, { useState } from "react";
import { createRoot } from "react-dom/client";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="display-6 mb-4">To-Do List</h1>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add
            </button>
          </div>

          <ul className="list-group">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {task}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => (deleteTask(index))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

let body = document.querySelector("body");
let root = createRoot(body);
root.render(<TodoList/>)